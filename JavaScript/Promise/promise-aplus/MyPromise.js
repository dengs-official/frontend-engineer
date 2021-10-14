/**
 * Promise A+ 规范实现
 */
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function isFn(fn) {
  return typeof fn === "function";
}
function isObj(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

module.exports = class MyPromise {
  constructor(executor) {
    // 传入执行函数
    this._state = PENDING; // 状态
    this._value = undefined; // 终值
    this._reason = undefined; // 据因
    this._onResolvedCallbacks = [];
    this._onRejectedCallbacks = [];

    executor(this._resolve.bind(this), this._reject.bind(this));
  }
  /**
   * then 方法实现
   * @param onFulfilled
   * @param onRejected
   * @returns
   */
  then(onFulfilled, onRejected) {
    // PENDING状态
    if (this._state === PENDING) {
      let promise2; // 返回promise2
      promise2 = new MyPromise((resolve, reject) => {
        // 保存成功回调
        this._onResolvedCallbacks.push(() => {
          this._executor(onFulfilled, this._value, promise2, resolve, reject);
        });
        // 保存拒绝回调
        this._onRejectedCallbacks.push(() => {
          this._executor(onRejected, this._reason, promise2, resolve, reject, REJECTED);
        });
      });
      return promise2;
    }
    // FULFILLED状态
    if (this._state === FULFILLED) {
      let promise2;
      promise2 = new MyPromise((resolve, reject) => {
        // setTimeout(() => {
        process.nextTick(() => {
          this._executor(onFulfilled, this._value, promise2, resolve, reject);
        });
      });
      return promise2;
    }
    // PREJECTED状态
    if (this._state === REJECTED) {
      let promise2;
      promise2 = new MyPromise((resolve, reject) => {
        // setTimeout(() => {
        process.nextTick(() => {
          this._executor(onRejected, this._reason, promise2, resolve, reject, REJECTED);
        });
      });
      return promise2;
    }
  }
  /**
   * 新promise内部的执行函数
   * @param handler
   * @param data
   * @param promise2
   * @param resolve
   * @param reject
   * @param type
   */
  _executor(handler, data, promise2, resolve, reject, type = FULFILLED) {
    // 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
    // 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因
    if (!isFn(handler)) {
      type === FULFILLED ? resolve(data) : reject(data);
    } else {
      let value;
      try {
        value = handler(data);
      } catch (e) {
        // 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
        return reject(e);
      }
      // 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程
      this._resolution(promise2, value, resolve, reject);
    }
  }
  /**
   * 执行函数成功回调
   * @param value
   */
  _resolve(value) {
    // 当resolve promise时，传递展开
    if (value instanceof MyPromise) {
      value.then(this._resolve.bind(this), this._reject.bind(this));
      return;
    }
    this._state = FULFILLED;
    // 必须拥有一个不可变的终值
    this._value = value;
    // onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用
    // 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调
    // setTimeout(() => {
    process.nextTick(() => {
      this._onResolvedCallbacks.forEach((callback) => {
        callback(this._value);
      });
    });
  }
  /**
   * 执行函数拒绝回调
   * @param reason
   */
  _reject(reason) {
    this._state = REJECTED;
    // 必须拥有一个不可变的据因
    this._reason = reason;
    // onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用
    // 当 promise 被拒绝执行时，所有的 onRejected 需按照其注册顺序依次回调
    // setTimeout(() => {
    process.nextTick(() => {
      // 最后一个异常打印出来
      if (this._onRejectedCallbacks.length === 0) {
        console.error(this._reason);
      }
      this._onRejectedCallbacks.forEach((callback) => {
        callback(this._reason);
      });
    });
  }
  /**
   * Promise 解决过程
   * @param myPromise
   * @param x
   * @param resolve
   * @param reject
   */
  _resolution(promise, x, resolve, reject) {
    if (x === promise) {
      // x 与 promise相等
      reject(new TypeError("Chaining cycle detected for myPromise #<MyPromise>"));
    } else if (x instanceof MyPromise) {
      // x 为 Promise

      // 如果 x 为 Promise ，则使 promise 接受 x 的状态 注4：
      // 如果 x 处于等待态， promise 需保持为等待态直至 x 被执行或拒绝
      // 如果 x 处于执行态，用相同的值执行 promise
      // 如果 x 处于拒绝态，用相同的据因拒绝 promise
      x.then((y) => {
        this._resolution(promise, y, resolve, reject);
      }, reject);
    } else if (isObj(x) || isFn(x)) {
      // x 为对象或函数
      let then;
      try {
        then = x.then;
      } catch (e) {
        return reject(e);
      }
      if (isFn(then)) {
        // 如果 then 是函数，将 x 作为函数的作用域 this 调用之

        // 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
        let called = false;
        try {
          then.call(
            x,
            // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
            (y) => {
              if (!called) {
                called = true;
                this._resolution(promise, y, resolve, reject);
              }
            },
            // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
            (r) => {
              if (!called) {
                called = true;
                reject(r);
              }
            }
          );
        } catch (e) {
          if (!called) {
            return reject(e);
          }
        }
      } else {
        resolve(x);
      }
    } else {
      resolve(x);
    }
  }
};

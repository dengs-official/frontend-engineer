/**
 * Promise A+ 规范实现
 */
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

function isFn(fn) {
  return typeof fn === "function";
}

export default class MyPromise {
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    this._reason = undefined;
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
          // 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
          if (!isFn(onFulfilled)) {
            resolve(this._value);
          } else {
            const value = onFulfilled(this._value);
            // 执行 Promise解决过程
            this._resolution(promise2, value, resolve, reject);
          }
        });
        // 保存拒绝回调
        this._onRejectedCallbacks.push(() => {
          // 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因
          if (!isFn(onRejected)) {
            reject(this._reason);
          } else {
            const value = onRejected(this._reason);
            // 执行 Promise解决过程
            this._resolution(promise2, value, resolve, reject);
          }
        });
      });
      return promise2;
    }
    // FULFILLED状态
    if (this._state === FULFILLED) {
      let promise2;
      promise2 = new MyPromise((resolve, reject) => {
        if (!isFn(onFulfilled)) {
          resolve(this._value);
        } else {
          const value = onFulfilled(this._value);
          this._resolution(promise2, value, resolve, reject);
        }
      });
      return promise2;
    }
    // PREJECTED状态
    if (this._state === REJECTED) {
      let myPromise;
      myPromise = new MyPromise((resolve, reject) => {
        if (!isFn(onRejected)) {
          reject(this._reason);
        } else {
          const value = onRejected(this._reason);
          this._resolution(myPromise, value, resolve, reject);
        }
      });
      return myPromise;
    }
  }
  /**
   * 执行函数成功回调
   * @param value
   */
  _resolve(value) {
    this._state = FULFILLED;
    // 必须拥有一个不可变的终值
    this._value = value;
    // onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用
    // 当 promise 成功执行时，所有 onFulfilled 需按照其注册顺序依次回调
    setTimeout(() => {
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
    setTimeout(() => {
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
  _resolution(myPromise, x, resolve, reject) {
    try {
      if (x === myPromise) {
        reject(
          new TypeError("Chaining cycle detected for myPromise #<MyPromise>")
        );
      }
      if (x instanceof MyPromise) {
        x.then(resolve, reject);
      }
      resolve(x);
    } catch (e) {
      reject(e.message);
    }
  }
}

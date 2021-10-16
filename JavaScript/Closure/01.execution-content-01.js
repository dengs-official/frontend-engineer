/**
 * 全局执行上下文
 */

console.log(v1);
// console.log(v2);
// console.log(v3);
console.log(f1);
console.log(f2);
console.log(this);

var v1 = 10; // 声明，初始化为undefined
let v2 = 20; // 声明，不会初始化，访问报错
var f1 = function () {}; // 声明，初始化为undefined
function f2() {} // 声明，并赋值

console.log("---------------");

console.log(v1);
console.log(v2);
// console.log(v3);
console.log(f1);
console.log(f2);
console.log(this);

/**
 * 全局环境执行上下文为:
 * v1: undefined
 * v2: not initialization
 * f1: undefined
 * f2: f f2() {}
 * this: Window
 */

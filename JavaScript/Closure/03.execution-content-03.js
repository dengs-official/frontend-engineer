/**
 * 执行上下文栈
 */

debugger; // 1. 全局执行上下文入栈
var v1 = 10;
function f1(y) {
  debugger; // 3. f1函数执行上下文入栈
  var c = 5;
  console.log(y + c);
}
function f2(x) {
  debugger; // 2. f2函数执行上下文入栈
  var b = 5;
  f1(x + b);
  debugger; // 4. f1函数执行上下文出栈
}

f2(v1);
debugger; // 5. f2函数执行上下文出栈

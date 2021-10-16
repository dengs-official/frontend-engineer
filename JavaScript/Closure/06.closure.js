/**
 * 闭包
 */
debugger;
var max = 10;
function f1() {
  debugger;
  // 函数作为返回值
  var max = 100;
  return function f1i(x) {
    debugger;
    if (x > max) {
      console.log(x);
    }
  };
}

function f2o(x) {
  debugger;
  if (x > max) {
    console.log(x);
  }
}
function f2(f) {
  debugger;
  // 函数作为参数传递
  var max = 1000;
  f(200);
}

f1()(150);
f2(f2o);

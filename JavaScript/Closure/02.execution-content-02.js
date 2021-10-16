/**
 * 函数执行上下文
 */

debugger;
function f1(a1) {
  debugger;
  console.log(i1);
  console.log(fi1);
  console.log(this);
  console.log(arguments); // 声明，并赋值
  console.log(a1); // 声明，并赋值
  console.log(v1); // 自由变量，根据取值作用域判断
  console.log(f2); // 自由变量，根据取值作用域判断

  var i1 = 30; // 声明，初始化为undefined
  function fi1() {} // 声明，并赋值

  console.log("----------------");

  console.log(i1);
  console.log(fi1);
  console.log(this);
  console.log(arguments);
  console.log(a1);
  console.log(v1);
  console.log(f2);
}

f1(20);
var v1 = 10;
function f2() {}

/**
 * 函数f1执行上下文为：
 * i1: undefined
 * fi1: f fi1() {}
 * a1: 20
 * arguments: [20]
 * this: Window
 */

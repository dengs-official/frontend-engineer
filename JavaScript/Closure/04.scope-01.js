/**
 * 作用域 和 执行栈
 */

debugger; // 全局作用域
var v1 = 10,
  v2 = 20;

function f1() {
  debugger; // f1作用域,链为 f1 -> global
  var v1 = 100;
  let v3 = 300;
  function f2(arg) {
    debugger; // f2 作用域，链为 f2 -> f1 -> global
    console.log(v3);
    var v1 = 1000,
      v4 = 4000;
  }
  f2(1); // 每次调用产生一个执行上下文
  f2(2);
}
f1();

for (let i = 0; i < 5; i++) {
  // 块级作用域
  setTimeout(() => {
    debugger;
    console.log(i);
  });
}

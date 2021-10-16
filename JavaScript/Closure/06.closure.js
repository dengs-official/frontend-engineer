// /**
//  * 闭包
//  */
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

function fn() {
  debugger;
  console.log(f2);
  var v11 = {
    name: "v11",
    age: 20,
  };
  var v12 = 30;
  function f2() {
    debugger;
    var v21 = 40;
    function f3() {
      debugger;
      function f4() {
        debugger;
        console.log(v11.age, v21);
      }
      f4();
    }
    f3();
  }
  f2();
}

fn();

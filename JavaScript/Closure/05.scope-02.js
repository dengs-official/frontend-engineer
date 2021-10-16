/**
 * 作用域链和自由变量
 */
debugger;
var v1 = 10;

function f1() {
  debugger;
  var v2 = 20;
  var v3 = 30;

  function fi() {
    debugger;
    /**
     * 自由变量通过作用域链获取；作用域链为词法作用域，由函数定义时确认
     * 因为fi是定义到f1当中的，虽然在后面通过f2调用，但是获取到f1中的v2
     */
    console.log(v1 + v2);
  }
  return fi;
}

var fi = f1();

function f2() {
  debugger;
  var v2 = 200;
  fi();
}

f2();

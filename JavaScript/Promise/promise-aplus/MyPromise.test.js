const MyPromise = require("./MyPromise.js");

// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve(100);
//   }, 1000);
//   reject("error");
// });

// const myPromise2 = myPromise.then(
//   (val) => {
//     console.log(val);
//     return { name: val + 1 };
//     // return myPromise2;
//   },
//   (e) => {
//     console.error("error ", e);
//     return "handle error";
//   }
// );

// myPromise2.then(
//   (val) => {
//     console.log(val);
//   },
//   (e) => {
//     console.error("error2 ", e);
//   }
// );

// setTimeout(() => {
//   myPromise.then(
//     (val) => {
//       console.log(val);
//     },
//     (e) => {
//       console.error("error ", e);
//     }
//   );
// }, 2000);

var p3 = new MyPromise(function (resolve, reject) {
  resolve("B");
});

var p1 = new MyPromise(function (resolve, reject) {
  resolve(p3);
});

p2 = new MyPromise(function (resolve, reject) {
  resolve("A");
});

var p4 = p1.then(function (v) {
  console.log(v);
});

p2.then(function (v) {
  console.log(v);
});

// let p = new Promise((resolve) => resolve(8))
//   .then(() => {
//     // throw new Error("error");
//   })
//   .then()
//   .then(function foo(value) {
//     // console.log(value);
//     // throw new Error("error");
//   });
// setTimeout(() => {
//   p.then(() => {
//     throw new Error("error");
//   }).catch((e) => {
//     console.log("e");
//   });
// }, 0);

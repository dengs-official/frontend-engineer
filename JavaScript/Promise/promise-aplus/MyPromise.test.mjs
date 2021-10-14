import MyPromise from "./MyPromise.mjs";

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject("error");
  }, 1000);
});

const myPromise2 = myPromise
  .then
  // (val) => {
  //   console.log(val);
  //   return { name: val + 1 };
  //   // return myPromise2;
  // },
  // (e) => {
  //   console.error("error ", e);
  //   return "handle error";
  // }
  ();

myPromise2.then(
  (val) => {
    console.log(val);
  },
  (e) => {
    console.error("error2 ", e);
  }
);

setTimeout(() => {
  myPromise.then(
    (val) => {
      console.log(val);
    },
    (e) => {
      console.error("error ", e);
    }
  );
}, 2000);

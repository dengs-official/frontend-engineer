import MyPromise from "./MyPromise.mjs";

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
  }, 1000);
});

const myPromise2 = myPromise.then(
  (val) => {
    console.log(val);
    return { name: val + 1 };
    // return myPromise2;
  },
  (e) => {
    console.error(e);
  }
);

myPromise2.then(
  (val) => {
    console.log(val);
  },
  (e) => {
    console.error(e);
  }
);

setTimeout(() => {
  myPromise.then(
    (val) => {
      console.log(val);
    },
    (e) => {
      console.error(e);
    }
  );
}, 2000);

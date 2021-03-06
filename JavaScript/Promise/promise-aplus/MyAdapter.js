// import MyPromise from "./MyPromise.mjs";
const MyPromise = require("./MyPromise.js");

exports.deferred = function () {
  const result = {};
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
};

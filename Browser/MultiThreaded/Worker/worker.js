self.onmessage = (e) => {
  console.log(e);
  // asyncCalc(e.data, (result) => {
  //   self.postMessage(result.data);
  // });
  self.postMessage(calc(e.data));
};

function asyncCalc(length, callback) {
  let result = 0;
  let i = 0;
  function asyncCalcInner(i) {
    if (i < length) {
      setTimeout(() => {
        result += 1;
        // console.log(result);
        asyncCalcInner(i + 1);
      });
    } else {
      callback(result);
    }
  }
  asyncCalcInner(i);
}

function calc(length) {
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += 1;
    // console.log(result);
  }
  return result;
}

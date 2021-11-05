let i = 0;
self.onmessage = function (e) {
  self.postMessage(++i);
};

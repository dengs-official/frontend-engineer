let i = 0;
self.onconnect = function (e) {
  const port = e.ports[0];
  port.onmessage = function (e) {
    port.postMessage(++i);
  };
};

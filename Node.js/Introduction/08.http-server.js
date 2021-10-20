const http = require("http");

const port = 3000;
const hostname = "127.0.0.1";

// http.Server
const server = http.createServer((req, res) => {
  // req: http.IncomingMessage
  // res: http.ServerResponse
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("你好世界\n");
});

server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});

/**
 * 终止进程
 */
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

let times = 0;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end("" + times++);
  if (times > 5) {
    // 发送终止信号
    process.kill(process.pid, "SIGTERM");
  }
});

server.listen(port, hostname, () => {
  console.log("服务器已就绪");
});

// 监听终止信号
process.on("SIGTERM", () => {
  // 关闭http服务，自动结束
  server.close(() => {
    console.log("进程已终止");
  });
});

const http = require("http");

const options = {
  hostname: "127.0.0.1",
  port: 3000,
  path: "/",
  method: "GET",
};

// http.ClientRequest
// const req = http.get(options, () => {
const req = http.request(options, (res) => {
  // res: http.IncomingMessage
  console.log(`状态码：${res.statusCode}`);
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();

const fs = require("fs");
const Stream = require("stream");
const EventEmitter = require("events");
const http = require("http");
// Node.js 的 stream 模块 提供了构建所有流 API 的基础。 所有的流都是 EventEmitter 的实例。
console.log(Stream.prototype instanceof EventEmitter);

// 由于它们的优点，许多 Node.js 核心模块提供了原生的流处理功能，最值得注意的有：
console.log(http.ServerResponse.prototype instanceof Stream);
console.log(http.ClientRequest.prototype instanceof Stream);
console.log(process.stdin instanceof Stream);

// 读写流
// const readStream = fs.createReadStream(__dirname + "/package-lock.json");
const readStream = new Stream.Readable({
  read(size) {
    // console.log("start read");
  },
});
const writeStream = new Stream.Writable({
  write: (chunk, encoding, next) => {
    console.log(chunk.toString());
    console.log("----------------");
    next();
  },
});
readStream.pipe(writeStream);
// readStream.on("readable", () => {
//   console.log(readStream.read().toString());
//   console.log("------------");
// });
readStream.push("hi!");
setTimeout(() => {
  readStream.push("ho!");
}, 1000);

setImmediate(() => {
  writeStream.write("写的");
  // writeStream.end();
});

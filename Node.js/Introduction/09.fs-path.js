/**
 * 文件 路径
 */
const fs = require("fs");
const path = require("path");

fs.open("./07.events.js", "r", (err, fd) => {
  console.log(fd);
});

fs.stat("./07.events.js", (err, stat) => {
  console.log(stat);
});

const notes = "./07.events.js";
console.log(path.dirname(notes));
console.log(path.basename(notes, path.extname(notes)));
console.log(path.extname(notes));

console.log(path.join("/", "test/", notes));

console.log(path.resolve(notes));
console.log(path.resolve("test", notes));
console.log(path.resolve("/test", notes));

console.log(path.normalize(notes));

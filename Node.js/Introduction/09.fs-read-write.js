const fs = require("fs");
const path = require("path");

const filePath = "./assets/test1.txt";
fs.open(filePath, "a+", (err, fd) => {
  console.log(fd);
  fs.readFile(fd, "utf8", (err, data) => {
    console.log(data);
  });
  // setTimeout(() => {
  fs.writeFile(fd, "一些内容", (err) => {});
  // }, 1000);
});

const folderName = "./";

console.log(fs.readdirSync(folderName).filter((item) => fs.lstatSync(item).isFile() && path.extname(item) === ".js"));

fs.rename(filePath, "./assets/new.txt", (err) => {});

console.log(__dirname);
console.log(__filename);

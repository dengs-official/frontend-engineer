/**
 * 与控制台交互 //readline-sync inquirer
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("你叫什么名字？", (name) => {
  console.log(`你好 ${name}！`);
  readline.question("你今年多大了？", (age) => {
    console.log(`你好，${age}岁的小伙子！`);
    readline.close();
  });
});

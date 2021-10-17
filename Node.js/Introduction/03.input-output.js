// 读取命令行参数
console.log(process.argv);
// minimist处理参数
const args = require("minimist")(process.argv.slice(2));
console.log(args);

// 清理控制台
console.clear();
const x = 1;
const y = 2;
const z = 3;
// 打印的字符串的次数进行计数
console.count("x 的值为 " + x + " 且已经检查了几次? ");

const oranges = ["橙子", "柚子"];
const apples = ["苹果", "橙子"];
oranges.forEach((fruit) => {
  console.count(fruit);
});
apples.forEach((fruit) => {
  console.count(fruit);
});

console.clear();
// 打印堆栈踪迹
const function2 = () => console.trace();
const function1 = () => function2();
function1();

console.clear();

//会打印到 stderr 流。
console.error("error");

// 为输出着色
console.log("\x1b[33m%s\x1b[0m", "你好");
const chalk = require("chalk");
console.log(chalk.green("你好"));

// process
const ProgressBar = require("progress");
const bar = new ProgressBar(":bar", { total: 100 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 50);

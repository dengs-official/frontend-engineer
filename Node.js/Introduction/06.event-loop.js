/**
 * 事件循环
 */
console.log(1);

setTimeout(() => {
  console.log(2);
});
new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log(3);
});
process.nextTick(() => {
  console.log(4);
});
setImmediate(() => {
  console.log(5);
});

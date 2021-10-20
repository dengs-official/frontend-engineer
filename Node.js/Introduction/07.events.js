/**
 * 事件
 */
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

let number = 0;
eventEmitter.once("once", (number) => {
  console.log("Once:" + number);
});
eventEmitter.on("start", (number) => {
  console.log("开始1:" + number);
});
eventEmitter.addListener("start", (number) => {
  console.log("开始2:" + number);
});
eventEmitter.prependListener("start", (number) => {
  console.log("开始3:" + number);
});

console.log(eventEmitter.eventNames());
console.log(eventEmitter.listenerCount("start"));
console.log(eventEmitter.listeners("start"));
console.log(eventEmitter.getMaxListeners());

eventEmitter.emit("start", ++number);
eventEmitter.emit("once", number);
// eventEmitter.off("start", () => {});
eventEmitter.removeAllListeners("start");
setTimeout(() => {
  eventEmitter.emit("start", ++number);
  eventEmitter.emit("once", number);
}, 1000);

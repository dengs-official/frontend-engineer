const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

let number = 0;
eventEmitter.on("start", (number) => {
  console.log("开始" + number);
});

eventEmitter.emit("start", ++number);
setTimeout(() => {
  eventEmitter.emit("start", ++number);
}, 1000);

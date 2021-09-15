import Queue from "@/dataStructure/Queue";

const queue = new Queue<number>();

for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}
for (const item of queue) {
  console.log("loop " + item);
}
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

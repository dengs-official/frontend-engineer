import Stack from "@/dataStructure/Stack";

const stack = new Stack<number>();

stack.push(0);
console.log(stack.push(1));
stack.push(2);
stack.push(3);
for (const item of stack) {
  console.log("loop " + item);
}
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack);

import FixedStack from "@/dataStructure/FixedStack";

const s = new FixedStack(5);
s.push(0);
s.push(1);
s.push(2);
s.push(3);
console.log(s.pop());
console.log(s.pop());
s.push(4);
s.push(5);
console.log(s.pop());
s.push(6);
for (const item of s) {
  console.log("loop");
  console.log(item);
}
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());

console.log(s);

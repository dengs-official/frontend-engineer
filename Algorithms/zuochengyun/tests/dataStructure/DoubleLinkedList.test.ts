import DoubleLinkedList from "@/dataStructure/DoubleLinkedList";

const doubleLink = new DoubleLinkedList<number>();

doubleLink.insertTail(1);
doubleLink.insertTail(2);
const node = doubleLink.insertTail(3);
doubleLink.insertTail(4);
doubleLink.insertTail(5);
doubleLink.insert(node, 20);

console.log(doubleLink.toString());
doubleLink.loopFromHead((node) => {
  console.log("loop from head: " + node.item);
});
doubleLink.loopFromTail((node) => {
  console.log("loop from tail: " + node.item);
});
for (const item of doubleLink) {
  console.log("loop " + item);
}

console.log("-----------");
doubleLink.delete(node);
doubleLink.reverse();
console.log(doubleLink.toString());

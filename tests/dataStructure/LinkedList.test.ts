import LinkedList from "@/dataStructure/LinkedList";

const link = new LinkedList<number>();

link.deleteHead();
link.insertTail(1);
link.insertHead(2);
link.insertHead(3);
link.insertHead(4);
link.insertHead(5);
// link.deleteTail();
link.insertHead(6);
link.insertHead(7);
link.insertTail(8);
// link.deleteHead();

// console.log(link);
for (const item of link) {
  console.log("loop " + item);
}

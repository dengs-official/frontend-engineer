import LinkedList from "@/dataStructure/LinkedList";
import { defaultIsCircularLinkedList, isCircularLinkedList } from "@/linkedListAlgorithm/circularLinkedList";

const circularList = new LinkedList<number>();
const circularListHead = circularList.insertTail(1);
circularList.insertTail(2);
const circularListThird = circularList.insertTail(3);
circularList.insertTail(4);
circularList.insertTail(5, circularListThird);

const unCircularList = new LinkedList<number>();
const unCircularListHead = unCircularList.insertTail(1);
unCircularList.insertTail(2);
unCircularList.insertTail(3);
unCircularList.insertTail(4);
unCircularList.insertTail(5);
unCircularList.insertTail(6);

console.log(defaultIsCircularLinkedList(circularListHead));
console.log(defaultIsCircularLinkedList(unCircularListHead));
console.log(isCircularLinkedList(circularListHead));
console.log(isCircularLinkedList(unCircularListHead));

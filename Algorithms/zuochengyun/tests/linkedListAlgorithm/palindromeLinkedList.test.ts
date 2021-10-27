import LinkedList from "@/dataStructure/LinkedList";
import { isPalindromeLinkedList } from "@/linkedListAlgorithm/palindromeLinkedList";

const palindromeList = new LinkedList<number>();
const palindromeListHead = palindromeList.insertTail(1);
palindromeList.insertTail(2);
palindromeList.insertTail(3);
palindromeList.insertTail(3);
palindromeList.insertTail(2);
palindromeList.insertTail(1);

console.log(isPalindromeLinkedList(palindromeListHead));

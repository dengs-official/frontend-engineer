import { LinkedListNode } from "@/dataStructure/LinkedList";

/**
 *快慢指针
 * @param head
 * @returns
 */
export function isPalindromeLinkedList<T>(head: LinkedListNode<T>): boolean {
  let flag = true;
  let slowIndex = head,
    fastIndex = head;
  // 获取中点
  while (fastIndex?.next?.next) {
    slowIndex = slowIndex.next as LinkedListNode<T>;
    fastIndex = fastIndex.next.next;
  }
  // 反转链表
  let prevNode = null,
    currNode: LinkedListNode<T> | null = slowIndex,
    nextNode = null;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  while (head !== prevNode && head && prevNode) {
    if (head.item !== prevNode?.item) {
      flag = false;
      break;
    }
    head = head.next as LinkedListNode<T>;
    prevNode = prevNode.next;
  }

  return flag;
}

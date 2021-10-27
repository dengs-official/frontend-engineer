import { LinkedListNode } from "@/dataStructure/LinkedList";

/**
 *快慢指针
 * @param head
 * @returns
 */
export function isCircularLinkedList<T>(head: LinkedListNode<T>): LinkedListNode<T> | null {
  let slowIndex = head;
  let fastIndex = head;
  let meetIndex = null;
  while (fastIndex?.next?.next) {
    slowIndex = slowIndex.next as LinkedListNode<T>;
    fastIndex = fastIndex.next.next;
    if (slowIndex === fastIndex) {
      meetIndex = fastIndex;
      break;
    }
  }
  if (!meetIndex) {
    return null;
  }
  slowIndex = head;
  while (slowIndex !== fastIndex) {
    slowIndex = slowIndex.next as LinkedListNode<T>;
    fastIndex = fastIndex.next as LinkedListNode<T>;
  }
  return slowIndex;
}

export function defaultIsCircularLinkedList<T>(head: LinkedListNode<T>): LinkedListNode<T> | null {
  const nodeSet = new Set([head]);
  while (head.next) {
    head = head.next;
    if (nodeSet.has(head)) {
      return head;
    } else {
      nodeSet.add(head);
    }
  }
  return null;
}

import LinkedList, { LinkedListNode, loopFn, toStingFn } from "./LinkedList";

export class DoubleLinkedListNode<T> {
  public item: T;
  public prev: DoubleLinkedListNode<T> | null;
  public next: DoubleLinkedListNode<T> | null;

  constructor(item: T, prev: DoubleLinkedListNode<T> | null = null, next: DoubleLinkedListNode<T> | null = null) {
    this.item = item;
    this.prev = prev;
    this.next = next;
  }
  toString(fn: toStingFn<T>): string {
    return fn ? fn(this.item) : `${this.item}`;
  }
}
export default class DoubleLinkedList<T> extends LinkedList<T> {
  protected head: DoubleLinkedListNode<T> | null;
  protected tail: DoubleLinkedListNode<T> | null;
  protected N: number;
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.N = 0;
  }
  public insertHead(item: T): DoubleLinkedListNode<T> {
    const newNode = new DoubleLinkedListNode(item, null, this.head);
    this.N++;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return newNode;
  }
  public insertTail(item: T): DoubleLinkedListNode<T> {
    const newNode = new DoubleLinkedListNode(item, this.tail);
    this.N++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }
    (this.tail as DoubleLinkedListNode<T>).next = newNode;
    this.tail = newNode;
    return newNode;
  }
  /**
   * 在指定节点后插入一个新节点
   * TODO 判断node属于当前链表
   * @param item
   * @param node
   * @returns
   */
  public insert(node: DoubleLinkedListNode<T>, item: T): DoubleLinkedListNode<T> {
    if (node === this.tail) {
      return this.insertTail(item);
    }
    const newNode = new DoubleLinkedListNode(item, node, node.next);
    this.N++;
    (node.next as DoubleLinkedListNode<T>).prev = newNode;
    node.next = newNode;
    return newNode;
  }
  public deleteHead(): DoubleLinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }
    const delNode = this.head;
    this.N--;
    if (delNode.next) {
      this.head = delNode.next;
      this.head.prev = null;
    } else {
      this.head = this.tail = null;
    }
    return delNode;
  }
  public deleteTail(): DoubleLinkedListNode<T> | null {
    const delNode = this.tail;
    delNode && this.N--;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return delNode;
    }
    this.tail = (delNode as DoubleLinkedListNode<T>).prev;
    (this.tail as DoubleLinkedListNode<T>).next = null;
    return delNode;
  }
  /**
   * 删除指定节点
   * TODO 判断node属于当前链表
   * @param node
   * @returns
   */
  public delete(node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
    if (this.head === this.tail) {
      if (node === this.head) {
        this.N--;
        this.head = this.tail = null;
      }
      return node;
    }
    this.N--;
    if (node === this.head) {
      return this.deleteHead() as DoubleLinkedListNode<T>;
    }
    if (node === this.tail) {
      return this.deleteTail() as DoubleLinkedListNode<T>;
    }
    const prevNode = node.prev as DoubleLinkedListNode<T>;
    const nextNode = node.next as DoubleLinkedListNode<T>;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    return node;
  }
  public reverse(node?: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> | DoubleLinkedListNode<T>[] | null {
    if (this.N === 0) {
      return [];
    }
    this.tail = this.head;
    let prevNode = null,
      currNode = node || this.head,
      nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      currNode.prev = nextNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    return [this.head as DoubleLinkedListNode<T>, this.tail as DoubleLinkedListNode<T>];
  }
  /** 迭代操作 */
  public fromArray(items: T[]): DoubleLinkedListNode<T> | null {
    super.fromArray(items);
    return this.head;
  }
  public toArray(): DoubleLinkedListNode<T>[] {
    return super.toArray() as DoubleLinkedListNode<T>[];
  }
  public loopFromHead(callback: loopFn<DoubleLinkedListNode<T>>): void {
    super.loopFromHead(callback as loopFn<LinkedListNode<T>>);
  }
  public loopFromTail(callback: loopFn<DoubleLinkedListNode<T>>): void {
    let currNode = this.tail,
      currIndex = this.N;
    while (currIndex) {
      callback(currNode as DoubleLinkedListNode<T>, --currIndex);
      currNode = (currNode as DoubleLinkedListNode<T>).prev;
    }
  }
}

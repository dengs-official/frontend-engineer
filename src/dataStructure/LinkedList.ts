type toStingFn<T> = (arg: T) => string;

export class LinkedListNode<T> {
  public item: T;
  public next: LinkedListNode<T> | null;
  constructor(item: T, next: LinkedListNode<T> | null = null) {
    this.item = item;
    this.next = next;
  }
  toString(fn: toStingFn<T>): string {
    return fn ? fn(this.item) : `${this.item}`;
  }
}

export default class LinkedList<T> implements Iterable<T> {
  private head: LinkedListNode<T> | null;
  private tail: LinkedListNode<T> | null;
  private N: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.N = 0;
  }

  /**
   *  实现可迭代协议，定义迭代器
   * @returns
   */
  [Symbol.iterator](): Iterator<T> {
    let pointer = this.head;
    return {
      next(): IteratorResult<T> {
        if (pointer) {
          const value = pointer.item;
          pointer = pointer.next;
          return { value, done: false };
        }
        return { value: null, done: true };
      },
    };
  }
  /**
   * 链表是否为空
   * @returns
   */
  public isEmpty(): boolean {
    return this.N === 0;
  }
  /**
   * 链表长度
   * @returns
   */
  public size(): number {
    return this.N;
  }
  /**
   * 表头插入节点
   * @param item
   */
  public insertHead(item: T): number {
    const newNode = new LinkedListNode(item, this.head);
    this.N++;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this.size();
  }
  /**
   * 表尾插入节点
   * @param item
   * @returns
   */
  public insertTail(item: T): number {
    const newNode = new LinkedListNode(item);
    this.N++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.size();
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    return this.size();
  }
  /**
   * 表头删除节点
   * @returns
   */
  public deleteHead(): LinkedListNode<T> | null {
    if (!this.head) {
      return null;
    }
    const delNode = this.head;
    this.N--;
    if (delNode.next) {
      this.head = delNode.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return delNode;
  }
  /**
   * 表尾删除节点
   * @return
   */
  public deleteTail(): LinkedListNode<T> | null {
    const delNode = this.tail;
    delNode && this.N--;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return delNode;
    }
    // 遍历获取最后一个元素的前一个元素设置为tail，并将next设置为null
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        if (!currentNode.next.next) {
          currentNode.next = null;
        } else {
          currentNode = currentNode.next;
        }
      }
      this.tail = currentNode;
    }
    return delNode;
  }
}

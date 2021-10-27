export type toStingFn<T> = (arg: T) => string;
export type loopFn<T> = (item: T, index: number) => void;
export class LinkedListNode<T> {
  public item: T;
  public next: LinkedListNode<T> | null;
  constructor(item: T, next: LinkedListNode<T> | null = null) {
    this.item = item;
    this.next = next;
  }
  toString(callback?: toStingFn<T>): string {
    return callback ? callback(this.item) : `${this.item}`;
  }
}

export default class LinkedList<T> implements Iterable<T> {
  protected head: LinkedListNode<T> | null;
  protected tail: LinkedListNode<T> | null;
  protected N: number;
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
    let node = this.head,
      pointer = 0;
    const N = this.N;
    return {
      next(): IteratorResult<T> {
        if (pointer < N) {
          node as LinkedListNode<T>;
          const value = (node as LinkedListNode<T>).item;
          node = (node as LinkedListNode<T>).next;
          pointer++;
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
  public insertHead(item: T): LinkedListNode<T> {
    const newNode = new LinkedListNode(item, this.head);
    this.N++;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return newNode;
  }
  /**
   * 表尾插入节点
   * @param item
   * @returns
   */
  public insertTail(item: T, next: LinkedListNode<T> | null = null): LinkedListNode<T> {
    const newNode = new LinkedListNode(item, next);
    this.N++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return newNode;
    }
    (this.tail as LinkedListNode<T>).next = newNode;

    this.tail = next || newNode;
    return newNode;
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
      this.head = this.tail = null;
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
      this.head = this.tail = null;
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
  public reverse(node?: LinkedListNode<T>): LinkedListNode<T> | LinkedListNode<T>[] | null {
    this.tail = this.head;
    let prevNode = null,
      currNode = node || this.head,
      nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    return this.head;
  }
  /** 迭代操作 */
  public fromArray(items: T[]): LinkedListNode<T> | null {
    items.forEach((item) => {
      this.insertTail(item);
    });
    return this.head;
  }
  public toArray(): LinkedListNode<T>[] {
    const array: LinkedListNode<T>[] = [];
    this.loopFromHead((node) => {
      array.push(node);
    });
    return array;
  }
  public loopFromHead(callback: loopFn<LinkedListNode<T>>): void {
    let currNode = this.head,
      currIndex = 0;
    while (currIndex < this.N) {
      callback(currNode as LinkedListNode<T>, currIndex++);
      currNode = (currNode as LinkedListNode<T>).next;
    }
  }
  public toString(callback?: toStingFn<T>): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }
}

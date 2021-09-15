import LinkedList from "./LinkedList";

export default class Queue<T> implements Iterable<T> {
  private linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList();
  }
  [Symbol.iterator](): Iterator<T> {
    return this.linkedList[Symbol.iterator]();
  }

  public isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }
  public size(): number {
    return this.linkedList.size();
  }
  public enqueue(item: T): number {
    return this.linkedList.insertTail(item);
  }
  public dequeue(): T | null {
    const deleteItem = this.linkedList.deleteHead();
    return deleteItem ? deleteItem.item : null;
  }
}

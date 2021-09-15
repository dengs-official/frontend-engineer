import LinkedList from "./LinkedList";

export default class Stack<T> implements Iterable<T> {
  private linkedList: LinkedList<T>;
  constructor() {
    this.linkedList = new LinkedList<T>();
  }
  [Symbol.iterator](): Iterator<T> {
    return this.linkedList[Symbol.iterator].call(this.linkedList);
  }
  public isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }
  public size(): number {
    return this.linkedList.size();
  }
  public push(item: T): number {
    return this.linkedList.insertHead(item);
  }
  public pop(): T | null {
    const deleteNode = this.linkedList.deleteHead();
    return deleteNode ? deleteNode.item : null;
  }
}

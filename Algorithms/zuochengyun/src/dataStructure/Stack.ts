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
  public push(item: T): T {
    return this.linkedList.insertHead(item).item;
  }
  public pop(): T | null {
    const popNode = this.linkedList.deleteHead();
    return popNode ? popNode.item : null;
  }
}

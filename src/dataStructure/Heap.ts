import swap from "@/common/swap";
import Comparator, { compareFn } from "@/comparator/Comparator";

export default class Heap<T> {
  private container: T[];
  public comparator: Comparator<T>;
  constructor(compareFn: compareFn<T>) {
    if (new.target === Heap) {
      throw new TypeError("Cannot construct Heap instance directly!");
    }
    this.container = [];
    this.comparator = new Comparator(compareFn);
  }
  public isEmpty(): boolean {
    return this.container.length === 0;
  }
  public size(): number {
    return this.container.length;
  }

  // 父节点，左右字节的基本操作
  private getParentIndex(childIndex: number): number {
    return (childIndex - 1) >> 1;
  }
  private getLeftChildIndex(parentIndex: number): number {
    return (parentIndex << 1) + 1;
  }
  private getRightChildIndex(parentIndex: number): number {
    return (parentIndex << 1) + 2;
  }
  private hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }
  private hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.size();
  }
  private hasRightChilde(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.size();
  }
  private getParent(childIndex: number): T {
    return this.container[this.getParentIndex(childIndex)];
  }
  private getLeftChild(parentIndex: number): T {
    return this.container[this.getLeftChildIndex(parentIndex)];
  }
  private getRightChild(parentIndex: number): T {
    return this.container[this.getRightChildIndex(parentIndex)];
  }
  // 上浮堆化
  public heapfiySwin(startIndex?: number): void {
    let currentIndex = startIndex || this.container.length - 1;
    let parentIndex = (currentIndex - 1) >> 1;
    while (parentIndex >= 0 && !this.pairIsInCorrectOrder(this.container[parentIndex], this.container[currentIndex])) {
      swap(currentIndex, parentIndex, this.container);
      currentIndex = parentIndex;
      parentIndex = (currentIndex - 1) >> 1;
    }
  }
  // 下沉堆化
  public heapfiySink(startIndex?: number): void {
    const finalIndex = this.size() - 1;
    let currentIndex = startIndex || 0;
    let childrenIndex = (currentIndex << 1) + 1;
    while (childrenIndex <= finalIndex) {
      const rightChildIndex = childrenIndex + 1;
      if (
        rightChildIndex <= finalIndex &&
        this.pairIsInCorrectOrder(this.container[rightChildIndex], this.container[childrenIndex])
      ) {
        childrenIndex = rightChildIndex;
      }
      if (!this.pairIsInCorrectOrder(this.container[currentIndex], this.container[childrenIndex])) {
        swap(childrenIndex, currentIndex, this.container);
        currentIndex = childrenIndex;
        childrenIndex = (currentIndex << 1) + 1;
      } else {
        break;
      }
    }
  }
  public push(item: T): void {
    this.container.push(item);
    this.heapfiySwin();
  }
  public pop(): T | null {
    const size = this.size();
    if (!size) {
      return null;
    }
    swap(0, size - 1, this.container);
    const popNode = this.container.pop() as T;
    this.heapfiySink();
    return popNode;
  }

  public pairIsInCorrectOrder(a: T, b: T): boolean {
    throw new Error(`You have to implement heap pair comparision method for ${a} and ${b} values.`);
  }
}

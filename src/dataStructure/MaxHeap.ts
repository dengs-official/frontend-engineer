import Heap from "./Heap";

export default class MaxHeap<T> extends Heap<T> {
  public pairIsInCorrectOrder(a: T, b: T): boolean {
    return this.comparator.greaterThanOrEqual(a, b);
  }
}

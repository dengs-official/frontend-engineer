export default class FixedStack<T> implements Iterable<T> {
  private value: T[];
  private N: number;

  constructor(cap: number) {
    this.value = new Array<T>(cap);
    this.N = 0;
  }
  [Symbol.iterator](): Iterator<T> {
    const value = this.value;
    let pointer = value.length;
    return {
      next(): IteratorResult<T> {
        if (pointer) {
          return { value: value[--pointer], done: false };
        }
        return { value: null, done: true };
      },
    };
  }
  public isEmpty(): boolean {
    return this.N === 0;
  }
  public size(): number {
    return this.N;
  }
  public push(item: T): void {
    if (this.N > this.value.length - 1) {
      throw new Error("Stack Overflow");
    }
    this.value[this.N++] = item;
  }
  public pop(): T | undefined {
    if (this.N < 1) {
      return undefined;
    }
    const N = --this.N;
    const item = this.value[N];
    delete this.value[N];
    return item;
  }
}

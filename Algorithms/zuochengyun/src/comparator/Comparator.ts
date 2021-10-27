export type compareFn<T> = (a: T, b: T) => number;
export type equalsFn<T> = (a: T, b: T) => boolean;

export default class Comparator<T> {
  public compare: compareFn<T>;
  public equals: equalsFn<T>;
  constructor(conpareFn?: compareFn<T>) {
    this.compare = conpareFn || Comparator.defaultCompare;
    this.equals = (a, b) => this.compare(a, b) === 0;
  }
  static defaultCompare<T>(a: T, b: T): number {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
  static defaultEqual<T>(a: T, b: T): boolean {
    return Comparator.defaultCompare(a, b) === 0;
  }
  public lessThan(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }
  public greaterThan(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }
  public lessThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) <= 0;
  }
  public greaterThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) >= 0;
  }
  public reverseCompare(): void {
    const originCompare = this.compare;
    this.compare = (a, b) => originCompare(b, a);
  }
}

export default class Counter {
  private name: string;
  private count: number;
  constructor(id: string) {
    this.name = id;
    this.count = 0;
  }
  increment(): void {
    this.count++;
  }
  tally(): number {
    return this.count;
  }
  toString(): string {
    return `${this.name}: ${this.count}`;
  }
}

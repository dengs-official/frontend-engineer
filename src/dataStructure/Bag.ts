
export default class Bag<T> implements Iterable<T> {
  private value: T[] = [];

  [Symbol.iterator](): Iterator<T> {
    let pointer = 0;
    return {
      next: ():IteratorResult<T> => {
        if (pointer < this.value.length) {
          return {value: this.value[pointer++], done: false};
        } 
        return {value: null, done: true};
      }
    };
  }
  
  public add(item: T): void {
    this.value.push(item);
  }
}
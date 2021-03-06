import _defaultSort from "@/sorterAlgorithm/_defaultSorter";

type sortFunc = (values: number[], ...rest: number[]) => number[];
type searchFunc = (array: number[], target: number) => [boolean, number];
/**
 * 对数器
 *
 * 检测某个算法结果是否正确
 */
export default class Checker {
  static mainSort(
    testFunc: sortFunc,
    rightFunc: sortFunc,
    testTimes: number,
    maxSize: number,
    maxValue: number,
    ...rest: number[]
  ): void {
    console.time("Execute");
    console.log("Executing");

    let isCorrect = true;
    for (let i = 0; i < testTimes; i++) {
      const origArray = Checker.generateRandomArray(maxSize, maxValue);
      let testArray = Checker.copyArray(origArray);
      let rightArray = Checker.copyArray(origArray);
      testArray = testFunc(testArray, ...rest);
      rightArray = rightFunc(rightArray, ...rest);
      // Checker.printArray(rightArray);
      if (!Checker.isEqual(testArray, rightArray)) {
        isCorrect = false;
        break;
      }
    }

    console.log("Execute Result: " + (isCorrect ? "Good!" : "Fucking off!"));
    console.timeEnd("Execute");
  }
  static mainSearch(
    testFunc: searchFunc,
    rightFunc: searchFunc,
    testTimes: number,
    maxSize: number,
    maxValue: number,
    judgeFunc = (a: [boolean, number], b: [boolean, number]) => a[0] === b[0]
  ): void {
    console.time("Execute");
    console.log("Executing");

    let isCorrect = true;
    for (let i = 0; i < testTimes; i++) {
      const array = _defaultSort(Checker.generateRandomArray(maxSize, maxValue));
      const target = Math.ceil(Math.random() * maxValue) * 2;
      if (!judgeFunc(testFunc(array, target), rightFunc(array, target))) {
        isCorrect = false;
        break;
      }
    }

    console.log("Execute Result: " + (isCorrect ? "Good!" : "Fucking off!"));
    console.timeEnd("Execute");
  }
  static generateRandomArray(maxSize: number, maxValue: number): number[] {
    const array = new Array(Math.floor(Math.random() * (1 + maxSize)));
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * (1 + maxValue));
    }
    return array;
  }
  static copyArray(array: number[]): number[] {
    return ([] as number[]).concat(array);
  }
  static isEqual(array1: number[], array2: number[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static printArray(array: number[]): void {
    const result = array.reduce((res, item) => res + " " + item, "");
    console.log(result);
  }
}

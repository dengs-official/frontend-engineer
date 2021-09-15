/**
 *
 * 二分查找
 *
 * 时间复杂度O(logN)
 *
 * 递归思想，每次将数组二分，判断当前数在哪边范围，在之内继续查找
 *
 * @param array
 * @param target
 * @returns
 */
export default function binarySearch(array: number[], target: number): [boolean, number] {
  let index = (function process(start: number, end: number): number | undefined {
    const mid = start + ((end - start) >> 1);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    if (start <= end) {
      return process(start, end);
    }
  })(0, array.length - 1);

  index = index === undefined ? -1 : index;
  return [!!~index, index];
}

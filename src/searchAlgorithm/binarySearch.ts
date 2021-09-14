/**
 *
 * 二分查找
 *
 * 时间复杂度O(logN)
 *
 * @param array
 * @param target
 * @returns
 */
export default function binarySearch(array: number[], target: number): [boolean, number] {
  let index = (function find(start: number, end: number): number | undefined {
    const mid = Math.ceil((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    if (start <= end) {
      return find(start, end);
    }
  })(0, array.length - 1);

  index = index === undefined ? -1 : index;
  return [!!~index, index];
}

/**
 * 归并排序
 *
 * 时间复杂度 O(NlogN) // T(N) = 2T(N/2) + O(N)
 *
 * 递归思想，每一次将数组二分，两边排序，之后再将两边合并
 *
 * @param values
 * @returns
 */
export default function mergeSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  (function process(start: number, end: number): void {
    if (start === end) {
      return;
    }
    const mid = start + ((end - start) >> 1);
    process(start, mid);
    process(mid + 1, end);
    merge(values, start, mid, end);
  })(0, len - 1);
  return values;
}

function merge(values: number[], start: number, mid: number, end: number): void {
  const tempArr = [];
  let leftPoint = start;
  let rightPoint = mid + 1;
  while (leftPoint <= mid && rightPoint <= end) {
    tempArr.push(values[leftPoint] <= values[rightPoint] ? values[leftPoint++] : values[rightPoint++]);
  }
  while (leftPoint <= mid) {
    tempArr.push(values[leftPoint++]);
  }
  while (rightPoint <= end) {
    tempArr.push(values[rightPoint++]);
  }
  for (let i = 0; i < tempArr.length; i++) {
    values[start + i] = tempArr[i];
  }
}

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
    const mid = start + ((end - start) >> 1); // 找到中间位置
    process(start, mid); // 左侧进行排序
    process(mid + 1, end); // 右侧进行排序
    merge(values, start, mid, end); // 左右部分合并
  })(0, len - 1);
  return values;
}

function merge(values: number[], start: number, mid: number, end: number): void {
  const tempArr = [];
  let leftPoint = start; //左侧部分起始下标
  let rightPoint = mid + 1; // 右侧部分起始下标
  while (leftPoint <= mid && rightPoint <= end) {
    // 当都没有越界时，左右值做对比，如果左侧值小于等于右侧值，将左侧值放入临时数组，同时左标下移，右侧同理
    tempArr.push(values[leftPoint] <= values[rightPoint] ? values[leftPoint++] : values[rightPoint++]);
  }
  // 将左侧或右侧剩余部分放进数组
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

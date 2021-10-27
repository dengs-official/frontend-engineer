import { swap } from "@/utils/Misc";
/**
 * 查找排序
 *
 * 时间复杂度O(n^2)
 *
 * 每一次遍历查找出数组中最小的数，放在排序位置，依次缩小所需的查找的数组
 *
 * @param values
 * @returns
 */
export default function (values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (values[j] < values[minIndex]) {
        minIndex = j;
      }
    }
    swap(i, minIndex, values);
  }
  return values;
}

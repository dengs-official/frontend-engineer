import { swap } from "@/utils/Misc";

/**
 * 冒泡排序
 *
 * 时间复杂度O(n^2)
 *
 * 每一次遍历将相邻两个数做对比，将较大数后移，完成后最大数沉底，依次缩小所需冒泡的数组
 *
 * @param values
 * @returns
 */
export default function bubbleSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (values[j] > values[j + 1]) {
        swap(j, j + 1, values);
      }
    }
  }
  return values;
}

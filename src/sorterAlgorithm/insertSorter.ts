import swap from "@/common/swap";

/**
 *选择排序

  时间复杂度: 最差O(n^2)，最优O(n)

  从0开始，每一次确定前m个数有序，最终到n时所有数据有序

 * @param values
 * @returns
 */
export default function insertSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  for (let i = 0; i < len; i++) {
    for (let j = i; j > 0 && values[j] < values[j - 1]; j--) {
      swap(j, j - 1, values);
    }
  }
  return values;
}

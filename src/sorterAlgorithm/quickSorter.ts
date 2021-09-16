import swap from "@/common/swap";

/**
 * 快速排序
 *
 * 时间复杂度(NlogN)
 *
 * 随机选择一个数放到最后，将前面数按照小于，等于，大于从左到分开，将次数和大于部分低一个数交换固定位置，依次对左右递归前面操作
 *
 * @param values
 * @returns
 */
export default function quickSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }

  (function partition(start: number, end: number): void {
    if (start >= end) {
      return;
    }
    // 随机取一个数放到尾部
    const randomPoint = Math.floor(Math.random() * (end - start + 1)) + start;
    const randomValue = values[randomPoint];
    swap(randomPoint, end, values);

    // 划分小于和大于区域边界
    let leftPoint = start - 1,
      rightPoint = end,
      sortPoint = start;
    while (sortPoint < rightPoint) {
      const sortValue = values[sortPoint];
      if (sortValue < randomValue) {
        // 当前值小于选择值, 左边界下一个位置和当前值交换，指针下移
        swap(++leftPoint, sortPoint++, values);
      } else if (sortValue > randomValue) {
        // 当前值大于选择值，右边界上一个位置和当前值交换，指针不变
        swap(--rightPoint, sortPoint, values);
      } else {
        // 当前值等于选择值，指针下移
        sortPoint++;
      }
    }
    // 最后一个值和右边界第一个值交换
    swap(end, rightPoint, values);
    // 对左部分快排
    partition(start, leftPoint);
    // 对右部分快排
    partition(rightPoint + 1, end);
  })(0, len - 1);

  return values;
}

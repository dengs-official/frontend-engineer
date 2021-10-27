/**
 * 基数排序
 *
 * 时间复杂度O(N), 空间复杂度O(N)
 *
 * 准备下标为[0-9]的桶，从最小位开始依次将数据放入对应的桶，
 * 然后按从小到大，先进先出依次从桶中取出数据排序，依次到最高位
 *
 * @param values
 * @returns
 */
export default function radixSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  const digit = maxbits(values);
  const radix = 10;
  let i = 0,
    j = 0;
  const bucket: number[] = [];
  for (let d = 0; d < digit; d++) {
    // 准备0-9的字词频表，依次对每个数据入桶，记录该位数字出现频次
    const count = Array.from({ length: 10 }, () => 0);
    for (i = 0; i < values.length; i++) {
      j = getDigit(values[i], d);
      count[j]++;
    }
    // 根据每个数字出现次数变为前缀和数组，进行平铺分片
    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }
    // 从右往左，依次按照数据位数所在位置，设置其出桶所在位置
    for (i = len - 1; i >= 0; i--) {
      j = getDigit(values[i], d);
      bucket[count[j] - 1] = values[i];
      count[j]--;
    }
    for (i = 0; i < len; i++) {
      values[i] = bucket[i];
    }
  }
  return values;
}

function maxbits(values: number[]): number {
  let max = 0,
    len = 0;
  values.forEach((value) => {
    max = Math.max(max, value);
  });
  while (max >= 1) {
    len++;
    max /= 10;
  }
  return len;
}
function getDigit(value: number, digit: number): number {
  return Math.floor(value / Math.pow(10, digit)) % 10;
}

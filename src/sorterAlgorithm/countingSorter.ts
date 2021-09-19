/**
 * 计数排序
 *
 * 时间复杂度O(N), 空间复杂度O(N)
 *
 * @param values
 * @param maxValue
 * @param minValue
 * @returns
 */
export default function countingSorter(values: number[], maxValue: number, minValue = 0): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  const bucketSize = maxValue - minValue + 1;
  const buckets: number[][] = Array.from({ length: bucketSize }, () => []);
  for (let i = 0; i < len; i++) {
    buckets[values[i]].push(values[i]);
  }
  values = [];
  for (let i = 0; i < bucketSize; i++) {
    values = values.concat(buckets[i]);
  }
  return values;
}

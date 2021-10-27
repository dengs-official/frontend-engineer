import quickSorter from "./quickSorter";
/**
 * 桶排序
 *
 * 时间复杂O(NlogN) 空间复杂度O(N)
 *
 * @param values
 * @param bucketNum
 * @returns
 */
export default function bucketSorter(values: number[], bucketNum = 10): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  let minValue = 0,
    maxValue = 0,
    bucketSize = 0;
  let i = 0,
    j = 0;
  for (i = 0; i < len; i++) {
    if (values[i] < minValue) {
      minValue = values[i];
      continue;
    }
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }
  bucketSize = Math.round((maxValue - minValue) / bucketNum);

  const buckets: number[][] = Array.from({ length: bucketNum }, () => []);
  for (i = 0; i < len; i++) {
    j = Math.ceil((values[i] - minValue + 1) / bucketSize);
    j > bucketNum && (j = bucketNum);
    buckets[j - 1].push(values[i]);
  }
  values = [];
  for (i = 0; i < bucketNum; i++) {
    quickSorter(buckets[i]);
  }
  for (i = 0; i < bucketNum; i++) {
    values = values.concat(buckets[i]);
  }
  return values;
}

import Comparator from "@/comparator/Comparator";
import MinHeap from "@/dataStructure/MinHeap";

/**
 * 堆排序
 *
 * 时间复杂度O(NlogN), 空间复杂度O(1), 当前实现O(N)
 * @param values
 * @returns
 */
export default function heapSorter(values: number[]): number[] {
  const len = values.length;
  if (len < 2) {
    return values;
  }
  const heap = new MinHeap<number>(Comparator.defaultCompare);
  for (let i = 0; i < len; i++) {
    heap.push(values[i]);
  }
  for (let i = 0; i < len; i++) {
    values[i] = heap.pop() as number;
  }
  return values;
}

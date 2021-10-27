import Comparator from "@/comparator/Comparator";
import MaxHeap from "@/dataStructure/MaxHeap";
import MinHeap from "@/dataStructure/MinHeap";

const array = [4, 5, 3, 5, 6, 0, 3, 1, 9, 2];

const maxHeap = new MaxHeap<number>(Comparator.defaultCompare);
const minHeap = new MinHeap<number>(Comparator.defaultCompare);

array.forEach((item) => {
  maxHeap.push(item);
  minHeap.push(item);
});

array.forEach((item) => {
  console.log("MaxHeap: " + maxHeap.pop());
  console.log("MinHeap: " + minHeap.pop());
});

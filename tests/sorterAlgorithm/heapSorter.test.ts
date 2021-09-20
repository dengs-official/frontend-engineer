import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import heapSorter from "@/sorterAlgorithm/heapSorter";

Checker.mainSort(heapSorter, _defaultSorter, 10000, 1000, 1000);

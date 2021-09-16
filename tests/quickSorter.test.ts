import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import quickSorter from "@/sorterAlgorithm/quickSorter";

Checker.mainSort(quickSorter, _defaultSorter, 1000, 100, 100);

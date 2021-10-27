import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import mergeSorter from "@/sorterAlgorithm/mergeSorter";

Checker.mainSort(mergeSorter, _defaultSorter, 10000, 1000, 1000);

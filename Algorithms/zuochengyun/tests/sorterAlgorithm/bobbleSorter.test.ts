import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import bubbleSorter from "@/sorterAlgorithm/bubbleSorter";

Checker.mainSort(bubbleSorter, _defaultSorter, 100000, 10, 100);

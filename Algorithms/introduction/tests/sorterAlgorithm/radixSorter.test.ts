import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import radixSorter from "@/sorterAlgorithm/radixSorter";

Checker.mainSort(radixSorter, _defaultSorter, 10000, 1000, 1000);

import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import insertSorter from "@/sorterAlgorithm/insertSorter";

Checker.mainSort(insertSorter, _defaultSorter, 1, 10000, 10000);

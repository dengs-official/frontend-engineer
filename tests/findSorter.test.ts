import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import findSorter from "@/sorterAlgorithm/findSorter";

Checker.main(findSorter, _defaultSorter, 1000000, 100, 100);

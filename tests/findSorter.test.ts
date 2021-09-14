import Checker from "@/utils/Checker";
import $defaultSorter from "@/sorterAlgorithm/$defaultSorter";
import findSorter from "@/sorterAlgorithm/findSorter";

Checker.main(findSorter, $defaultSorter, 1000000, 100, 100);

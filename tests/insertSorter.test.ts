import Checker from "@/utils/Checker";
import $defaultSorter from "@/sorterAlgorithm/$defaultSorter";
import insertSorter from "@/sorterAlgorithm/insertSorter";

Checker.main(insertSorter, $defaultSorter, 1, 10000, 10000);

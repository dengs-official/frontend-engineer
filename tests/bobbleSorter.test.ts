import Checker from "@/utils/Checker";
import $defaultSorter from "@/sorterAlgorithm/$defaultSorter";
import bubbleSorter from "@/sorterAlgorithm/bubbleSorter";

Checker.main(bubbleSorter, $defaultSorter, 100000, 10, 100);

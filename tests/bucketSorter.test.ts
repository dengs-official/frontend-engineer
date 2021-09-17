import Checker from "@/utils/Checker";
import _defaultSorter from "@/sorterAlgorithm/_defaultSorter";
import bucketSorter from "@/sorterAlgorithm/bucketSorter";

Checker.mainSort(bucketSorter, _defaultSorter, 10000, 1000, 1000);

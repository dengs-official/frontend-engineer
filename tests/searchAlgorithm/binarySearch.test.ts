import Checker from "@/utils/Checker";
import _defaultSearch from "@/searchAlgorithm/_defaultSearch";
import binarySearch from "@/searchAlgorithm/binarySearch";

Checker.mainSearch(binarySearch, _defaultSearch, 100000, 100, 100);

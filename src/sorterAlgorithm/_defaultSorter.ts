export default function _defaultSorter(array: number[]): number[] {
  return array.sort((a: number, b: number): number => {
    if (a < b) {
      return -1;
    }
    return 1;
  });
}

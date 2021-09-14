export default function _defaultSearch(array: number[], target: number): [boolean, number] {
  const result = array.indexOf(target);
  return [!!~result, result];
}

export function type(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}
export function isEmpty(val) {
  return [null, undefined, ""].includes(val);
}

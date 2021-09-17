export default function swap<T>(i: number, j: number, values: T[]): void {
  const tempVal = values[i];
  values[i] = values[j];
  values[j] = tempVal;
}

export function bitSwap(i: number, j: number, values: number[]): void {
  values[i] = values[i] ^ values[j];
  values[j] = values[i] ^ values[j];
  values[i] = values[i] ^ values[j];
}

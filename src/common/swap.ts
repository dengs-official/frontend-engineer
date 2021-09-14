export default function swap(i: number, j: number, values: number[]): void {
  const tempVal = values[i];
  values[i] = values[j];
  values[j] = tempVal;
}

export function bitSwap(i: number, j: number, values: number[]): void {
  values[i] = values[i] ^ values[j];
  values[j] = values[i] ^ values[j];
  values[i] = values[i] ^ values[j];
}

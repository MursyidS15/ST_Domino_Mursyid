type Domino = [number, number];

export default function sortDesc(dominoes: Domino[]): Domino[] {
  return [...dominoes].sort((a, b) => (b[0] + b[1]) - (a[0] + a[1]));
}

type Domino = [number, number];

export default function sortAsc(dominoes: Domino[]): Domino[] {
  return [...dominoes].sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
}

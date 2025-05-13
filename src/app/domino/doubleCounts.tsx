type Domino = [number, number];

export default function doubleCounts(dominoes: Domino[]): number {
  return dominoes.filter(([a, b]) => a === b).length;
}

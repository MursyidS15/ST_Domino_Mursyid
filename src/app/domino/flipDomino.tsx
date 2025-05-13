type Domino = [number, number];

export default function flipDomino(dominoes: Domino[]): Domino[] {
  return dominoes.map(([a, b]) => [b, a]);
}

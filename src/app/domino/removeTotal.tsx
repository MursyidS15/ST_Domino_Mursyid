type Domino = [number, number];

export default function removeTotal(dominoes: Domino[], total: number): Domino[] {
  return dominoes.filter(([a, b]) => a + b !== total);
}

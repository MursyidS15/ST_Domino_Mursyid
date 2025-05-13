type Domino = [number, number];

export default function removeDup(dominoes: Domino[]): Domino[] {
  const seen = new Set<string>();
  return dominoes.filter(([a, b]) => {
    const key = [Math.min(a, b), Math.max(a, b)].join(',');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

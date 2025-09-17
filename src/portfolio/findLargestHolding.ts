export interface Asset {
  name: string;
  value: number;
  type?: string;
}

export function findLargestHolding(assets: Asset[]): Asset | null {
  const [first, ...rest] = assets;
  if (!first) return null;

  let max: Asset = first;
  
  for (const item of rest) {
    max = item.value > max.value ? item : max;
  }

  return max;
}

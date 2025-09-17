import { Asset } from "./findLargestHolding";

type Allocation = { name: string; allocation: number };

export function assetAllocation(assets: Asset[]): Allocation[] {
  const total: number = assets.reduce((sum: number, { value }: Asset) => sum + value, 0);

  const allocations: Allocation[] = assets.map(({ name, value }: Asset): Allocation => ({
    name,

    allocation: total === 0 ? 0 : Math.round((value / total) * 100 * 100) / 100,
  }));

  return allocations;
}

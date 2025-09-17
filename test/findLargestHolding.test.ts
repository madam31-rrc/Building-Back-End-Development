import { findLargestHolding, Asset } from '../src/portfolio/findLargestHolding';

describe('findLargestHolding', () => {
  it('picks the item with the greatest value', () => {
    const assets: Asset[] = [
      { name: 'Home', value: 320_000 },
      { name: 'ETF', value: 180_000 },
      { name: 'Crypto', value: 12_000 },
      { name: 'Bonds', value: 55_000 },
    ];
    const result = findLargestHolding(assets);
    expect(result).toMatchObject({ name: 'Home', value: 320_000 });
  });

  it('returns null for an empty list', () => {
    expect(findLargestHolding([])).toBeNull();
  });

  it('returns the first item when there is a tie', () => {
    const assets: Asset[] = [
      { name: 'ETF', value: 100_000 },
      { name: 'Bonds', value: 100_000 },
      { name: 'Bills', value: 5_000 },
    ];
    const result = findLargestHolding(assets);
    // Ensure it returns the actual first object (not just same values)
    expect(result).toBe(assets[0]);
  });
});

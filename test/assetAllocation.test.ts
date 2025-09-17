import { assetAllocation } from "../src/portfolio/assetAllocation";
import type { Asset } from "../src/portfolio/findLargestHolding";

describe("assetAllocation", () => {
  it("splits evenly when values are identical", () => {
    const assets: Asset[] = [
      { name: "Beach House", value: 100 },
      { name: "City Condo", value: 100 },
      { name: "Country Estate", value: 100 },
    ];

    const result = assetAllocation(assets);
    expect(result).toEqual([
      { name: "Beach House", allocation: 33.33 },
      { name: "City Condo", allocation: 33.33 },
      { name: "Country Estate", allocation: 33.33 },
    ]);
  });

  it("computes 75/25 allocation for 300 vs 100", () => {
    const assets: Asset[] = [
      { name: "Property", value: 300 },
      { name: "Shares", value: 100 },
    ];

    const result = assetAllocation(assets);
    expect(result).toEqual([
      { name: "Property", allocation: 75 },
      { name: "Shares", allocation: 25 },
    ]);
  });

  it("returns an empty list for empty input", () => {
    const result = assetAllocation([]);
    expect(result).toEqual([]);
  });
});

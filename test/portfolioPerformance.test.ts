import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance';

describe('calculatePortfolioPerformance', () => {
  test('should return positive profitOrLoss when currentValue > initialInvestment', () => {
    const result = calculatePortfolioPerformance(100, 155);
    expect(result.profitOrLoss).toBeGreaterThan(0)
  });

  test('should return negative profitOrLoss when currentValue < initialInvestment', () => {
    const result = calculatePortfolioPerformance(100, 95);
    expect(result.profitOrLoss).toBeLessThan(0);
  });

  test('should return 0 profitOrLoss when currentValue === initialInvestment', () => {
    const result = calculatePortfolioPerformance(100, 100);
    expect(result.profitOrLoss).toBe(0);
  });
});

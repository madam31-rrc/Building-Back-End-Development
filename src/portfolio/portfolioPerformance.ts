export interface PortfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;   // rounded to 2 decimals when valid, else NaN
  performanceSummary: string; // short label
}

export function calculatePortfolioPerformance(
  initialInvestment: number,
  currentValue: number
): PortfolioPerformance {
  const profitOrLoss: number = currentValue - initialInvestment;

  let percentageChange: number;
  if (initialInvestment > 0) {
    percentageChange = (profitOrLoss / initialInvestment) * 100;
  } else {
    // avoid dividing by 0 or a negative baseline
    percentageChange = Number.NaN;
  }

  // round to 2 decimals if it’s a real number
  if (Number.isFinite(percentageChange)) {
    percentageChange = Math.round(percentageChange * 100) / 100;
  }

  let performanceSummary: string;
  if (!Number.isFinite(percentageChange)) {
    performanceSummary = 'No data';
  } else if (percentageChange > 20) {
    performanceSummary = 'Gained a lot';
  } else if (percentageChange > 10) {
    performanceSummary = 'Gained moderately';
  } else if (percentageChange > 0) {
    performanceSummary = 'Gained slightly';
  } else if (percentageChange === 0) {
    performanceSummary = 'No change';
  } else if (percentageChange >= -10) {
    performanceSummary = 'Lost slightly';
  } else if (percentageChange >= -20) {
    performanceSummary = 'Lost moderately';
  } else {
    performanceSummary = 'Lost a lot';
  }

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}

export interface portfolioPerformance {
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function portfolioPerformance(
  initialInvestment: number,
  currentValue: number
): portfolioPerformance {
  const profitOrLoss: number = currentValue - initialInvestment;

  let percentageChange: number;
  if (initialInvestment > 0) {
    percentageChange = (profitOrLoss / initialInvestment) * 100;
  } else {
    percentageChange = Number.NaN;
  }

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

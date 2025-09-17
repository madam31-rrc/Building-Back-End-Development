import express, { Express, Request, Response } from "express";
import { Asset, findLargestHolding } from "./portfolio/findLargestHolding";
import { portfolioPerformance } from "./portfolio/portfolioPerformance";
import { assetAllocation } from "./portfolio/assetAllocation";

const app: Express = express();
app.use(express.json());

const API_VERSION: string = "1.0.0";

const assets: Asset[] = [
  { name: "Home", value: 300000 },
  { name: "ETF", value: 150000 },
  { name: "Crypto", value: 50000 },
  { name: "Bonds", value: 10000 },
];

const num = (v: unknown, fallback: number): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello, Belialov!");
});

app.get("/api/v1/health", (_req: Request, res: Response): void => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: API_VERSION,
  });
});

app.get("/api/v1/performance", (req: Request, res: Response): void => {
  const initial: number = num(req.query.initial, 10000);
  const current: number = num(req.query.current, 12000);

  const performanceResults = portfolioPerformance(initial, current);
  res.json(performanceResults);
});

app.get("/api/v1/largest-holding", (_req: Request, res: Response): void => {
  const largestHolding: Asset | null = findLargestHolding(assets);

  res.json(largestHolding);
});

app.get("/api/v1/allocation", (_req: Request, res: Response): void => {
  const allocations: { name: string; allocation: number }[] = assetAllocation(assets);

  res.json(allocations);
});

export default app;

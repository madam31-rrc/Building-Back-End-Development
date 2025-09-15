import express from 'express';
import pkg from '../package.json';

const app = express();
app.use(express.json());

const API_VERSION = pkg.version ?? '1.0.0';

app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: API_VERSION,
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/hello', (req, res) => {
  const name = (req.query.name as string) || 'World';
  res.json({ message: `Hello, ${name}!` });
});

export default app;

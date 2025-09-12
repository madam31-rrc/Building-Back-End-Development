import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/hello', (req, res) => {
  const name = (req.query.name as string) || 'World';
  res.json({ message: `Hello, ${name}!` });
});

export default app;

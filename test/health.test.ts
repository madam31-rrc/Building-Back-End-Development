import request from 'supertest';
import app from '../src/app';

describe('Health Check Endpoint - /api/v1/health', () => {
  test('should return 200 status code', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.status).toBe(200);
  });

  test('should return application/json content type', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.type).toBe('application/json');
  });

  test('should return health status with all required fields', async () => {
    const response = await request(app).get('/api/v1/health');
    
    expect(response.body).toEqual({
      status: expect.any(String),
      uptime: expect.any(Number),
      timestamp: expect.any(String),
      version: expect.any(String)
    });
  });

  test('should return status "OK"', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.body.status).toBe('OK');
  });

  test('should return positive uptime value', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.body.uptime).toBeGreaterThan(0);
  });

  test('should return valid ISO timestamp', async () => {
    const response = await request(app).get('/api/v1/health');
    const timestamp = new Date(response.body.timestamp);
    expect(timestamp instanceof Date && !isNaN(timestamp.getTime())).toBe(true);
  });

  test('should return correct API version', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.body.version).toBe('1.0.0');
  });
});
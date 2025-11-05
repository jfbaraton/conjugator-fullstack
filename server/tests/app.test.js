const request = require('supertest');
const app = require('../src/app');
describe('App', () => {
  it('should respond to health check', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });
});
describe('App', () => {
  it('should not respond to BS check', async () => {
    const res = await request(app).get('/api/BS');
    expect(res.statusCode).toBe(404);
  });
});


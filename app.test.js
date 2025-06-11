const request = require('supertest');
const path = require('path');
const fs = require('fs');
const app = require('./app');

describe('GET /', () => {
  it('should return index.html content', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>'); // ตรวจว่ามี HTML จริง
  });
});

describe('GET /test', () => {
  it('should return test.html content', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('<!DOCTYPE html>');
  });
});

describe('CORS Middleware', () => {
  it('should set CORS headers for development', async () => {
    process.env.NODE_ENV = 'development';
    const res = await request(app).get('/');
    expect(res.headers['access-control-allow-origin']).toBe('*');
  });
});

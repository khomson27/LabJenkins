const http = require('http');
const app = require('./app');

describe('Server start and stop', () => {
  let server;

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(3001, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return 200 from /', (done) => {
    http.get('http://localhost:3001', (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});

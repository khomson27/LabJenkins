const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

app.use(cors({
  origin: isDev ? '*' : 'https://yourdomain.com',
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'test.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

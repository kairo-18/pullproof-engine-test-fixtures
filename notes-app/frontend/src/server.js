const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 3000;
const API_URL = process.env.API_URL || 'http://api:4000';

app.use(createProxyMiddleware({ target: API_URL, changeOrigin: true, pathFilter: '/api' }));
app.use(express.static(path.join(__dirname)));

app.listen(port, '0.0.0.0', () => {
  console.log(`frontend listening on port ${port}, proxying /api to ${API_URL}`);
});

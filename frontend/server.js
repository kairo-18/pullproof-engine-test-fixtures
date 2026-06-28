const express = require('express');
const app = express();
const port = 3000;
const API_URL = process.env.API_URL || 'http://api:4000';

app.get('/', async (req, res) => {
  try {
    const apiRes = await fetch(`${API_URL}/api/hello`);
    const data = await apiRes.json();
    res.status(200).send(`<html><body><h1>PullProof Multi-Service Fixture</h1><p>Backend says: ${data.message}</p></body></html>`);
  } catch (err) {
    res.status(200).send(`<html><body><h1>PullProof Multi-Service Fixture</h1><p>Backend unreachable: ${err.message}</p></body></html>`);
  }
});

app.get('/api/hello', async (req, res) => {
  try {
    const apiRes = await fetch(`${API_URL}/api/hello`);
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: 'backend unreachable', detail: err.message });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`frontend listening on port ${port}, proxying to ${API_URL}`);
});

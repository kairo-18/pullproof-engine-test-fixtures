const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('<html><body><h1>PullProof Fullstack Fixture</h1></body></html>');
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'hello from fullstack' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`fullstack-single-container listening on port ${port}`);
});

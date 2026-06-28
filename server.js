const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'hello from express' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`single-express-api listening on port ${port}`);
});

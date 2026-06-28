const express = require('express');
const app = express();
const port = 4000;

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'hello from backend service' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`backend listening on port ${port}`);
});

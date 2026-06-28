const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('this app will never run because Dockerfile is missing');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`missing-dockerfile listening on port ${port}`);
});

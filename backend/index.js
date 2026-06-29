const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 4000;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/api/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ status: 'ok', db: result.rows[0] ? 'connected' : 'error' });
  } catch (err) {
    res.status(503).json({ status: 'error', db: err.message });
  }
});

pool.query('SELECT 1').then(() => console.log('DB connected')).catch(err => console.error('DB connection failed:', err.message));

app.listen(port, '0.0.0.0', () => {
  console.log(`api listening on port ${port}`);
});

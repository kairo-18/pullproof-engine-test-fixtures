const express = require('express');
const db = require('./database');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = db.prepare('SELECT id, title, content, created_at FROM notes ORDER BY created_at DESC').all();
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'title is required' });
  }
  const stmt = db.prepare('INSERT INTO notes (title, content) VALUES (?, ?)');
  const result = stmt.run(title.trim(), (content || '').trim());
  const note = db.prepare('SELECT id, title, content, created_at FROM notes WHERE id = ?').get(result.lastInsertRowid);
  res.status(201).json(note);
});

app.delete('/api/notes/:id', (req, res) => {
  const stmt = db.prepare('DELETE FROM notes WHERE id = ?');
  const result = stmt.run(Number(req.params.id));
  if (result.changes === 0) return res.status(404).json({ error: 'note not found' });
  res.status(204).end();
});

app.listen(port, '0.0.0.0', () => {
  console.log(`backend listening on port ${port}`);
});

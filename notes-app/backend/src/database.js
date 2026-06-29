const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '..', 'notes.db'));

db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
)`);

const count = db.prepare('SELECT COUNT(*) as count FROM notes').get();
if (count.count === 0) {
  const seed = db.prepare('INSERT INTO notes (title, content) VALUES (?, ?)');
  seed.run('Welcome to Notes', 'This is your first note. Try creating more!');
  seed.run('PullProof Preview', 'This note was seeded automatically on startup.');
}

module.exports = db;

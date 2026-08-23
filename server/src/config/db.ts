import sqlite3 from "sqlite3";
import path from "path";

export const db = new sqlite3.Database(path.join(import.meta.dirname, "db.sqlite"));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstname TEXT NOT NULL,
      lastname TEXT NOT NULL,
      login TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
  // db.run(`
  //   DROP TABLE posts;
  // `)

  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      desc TEXT,
      link TEXT,
      user_id INTEGER,
      created_at TEXT NOT NULL DEFAULT (datetime('now')), 
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `);
});
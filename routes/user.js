const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Vulnerable login (SQLi)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  db.query(query, (err, results) => {
    if (err) return res.send('Error');
    if (results.length > 0) {
      res.cookie('user_id', results[0].id);
      res.send('Logged in');
    } else {
      res.send('Invalid credentials');
    }
  });
});

// Vulnerable search (XSS)
router.get('/search', (req, res) => {
  const q = req.query.q;
  res.send(`<h2>Search Results for: ${q}</h2>`);
});

// IDOR
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  db.query(`SELECT * FROM users WHERE id = ${userId}`, (err, result) => {
    if (err) return res.send('Error');
    res.json(result[0]);
  });
});

module.exports = router;

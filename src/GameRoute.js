const express = require('express');
const router = express.Router();
const db = require('./db'); // Import your database connection or ORM

router.get('/api/games', async (req, res) => {
  try {
    const games = await db.query('SELECT * FROM games');
    res.json(games.rows);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

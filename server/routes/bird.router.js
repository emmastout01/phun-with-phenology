const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Get all birds
router.get('/', (req, res) => {
  const query = 'SELECT * from "bird"';
  pool.query(query)
  .then(result => {
    res.send(result.rows);
  }).catch(err => {
    console.log('error in bird GET: ', err);
    res.sendStatus(500);
  })
});

module.exports = router;
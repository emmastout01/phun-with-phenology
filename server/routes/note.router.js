const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET notes route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT 
  note.id,
  note.user_id, 
  note.date, 
  note.time, 
  note.location, 
  note.content as note_content, 
  json_agg(json_build_object(
    'bird_note_id', bird.id,
    'bird_note_content', bird_note.content, 
    'bird', bird.name, 
    'bird_photo', bird.photo)) as bird_notes from "note" 
  LEFT JOIN "bird_note" ON "note".id = "bird_note".note_id 
  LEFT JOIN "bird" ON "bird_note".bird_id = "bird".id 
  GROUP BY note.id, note.user_id, note.date, note.time, note.location, note.content;`;
  pool.query(query)
  .then(result => {
    console.log({result});
    res.send(result.rows)
  }).catch(err => {
    console.log('error in GET notes: ', err);
    res.sendStatus(500);
  })
});

/**
 * POST notes route
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const query = `INSERT INTO "note"("user_id", "date", "time", "location", "content") VALUES ($1, $2, $3, $4, $5)`;
  const { userId, date, time, location, content } = req.body;
  pool.query(query, [userId, date, time, location, content])
  .then(results => {
    res.sendStatus(201);
  }).catch(err => {
    console.log('error in GET notes: ', err);
    res.sendStatus(500);
  })
});

module.exports = router;

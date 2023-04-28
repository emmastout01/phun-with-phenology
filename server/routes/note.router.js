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
  note.weather_high,
  note.weather_low,
  note.weather_condition_text,
  note.location
  FROM "note"`;
    pool.query(query)
        .then(result => {
            res.send(result.rows);
        }).catch(err => {
            console.log('error in GET notes: ', err);
            res.sendStatus(500);
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT 
    note.id,
    note.user_id, 
    note.date, 
    note.weather_high,
    note.weather_low,
    note.weather_condition_text,
    note.weather_condition_image,
    note.time, 
    note.location, 
    note.content as note_content, 
    json_agg(json_build_object(
      'bird_note_id', bird.id,
      'bird_note_content', bird_note.content, 
      'bird', bird.name, 
      'bird_photo', bird.photo)) as bird_notes 
    FROM "note"
    LEFT JOIN "bird_note" ON "note".id = "bird_note".note_id 
    LEFT JOIN "bird" ON "bird_note".bird_id = "bird".id 
    WHERE note.id = $1
    GROUP BY note.id, note.user_id, note.date, note.time, note.location, note.content;`;
    pool.query(query, [id])
        .then(result => {
            // Only send the first row because there will only be one row
            res.send(result.rows[0])
        }).catch(err => {
            console.log('error in GET notes: ', err);
            res.sendStatus(500);
        })
})

/**
 * POST notes route
 */
router.post('/', rejectUnauthenticated, async (req, res) => {
    const { userId, date, time, location, content, birdNotes, weatherHigh, weatherLow, weatherConditionText, weatherConditionImage } = req.body;

    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect()

    try {
        await client.query('BEGIN')
        const noteQuery = `INSERT INTO "note" ("user_id", "date", "time", "location", "weather_high", "weather_low", "weather_condition_text", "weather_condition_image", "content") 
                           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;`
        const birdNoteQuery = `INSERT INTO "bird_note" ("note_id", "bird_id", "content") 
                               VALUES ($1, $2, $3);`
        const noteResults = await client.query(noteQuery, [userId, date, time, location, weatherHigh, weatherLow, weatherConditionText, weatherConditionImage, content]);
        for (birdNote of birdNotes) {
            await client.query(birdNoteQuery, [noteResults.rows[0].id, birdNote.bird_id, birdNote.content]);
        }
            await client.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error in POST note: ', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;

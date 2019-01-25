const express = require('express');
const router = express.Router();
const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432, 
    database: 'prime_feedback',
    max: 10,
    idleTimeoutMillis: 10000,
});

router.get('', (req, res) => {
    pool.query('SELECT * FROM "feedback";').then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error in feedback router get`, error);
        res.sendStatus(500);
    });
});

module.exports = router;
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

router.post('/', (req, res) => {
    // console.log(req.body);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                VALUES ($1, $2, $3, $4);`, Object.values(req.body)).then( (response) => {
                    res.sendStatus(201);
                }).catch(error => {
                    res.sendStatus(500);
                    console.log(`error POSTing in feedback.router`, error);
                })
})

module.exports = router;
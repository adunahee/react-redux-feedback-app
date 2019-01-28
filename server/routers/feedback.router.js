const express = require('express');
const router = express.Router();

//constructor for pool
const Pool = require('./../modules/pool')

const pool = Pool;

// the pool will log when it connects to the database
pool.on('connect', () => {
    console.log('Postgesql connected');
});

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});


router.get('', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY "date" DESC, "id";').then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log(`Error in feedback router get`, error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    // console.log(req.body);
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                VALUES ($1, $2, $3, $4);`, Object.values(req.body)).then((response) => {
        res.sendStatus(201);
    }).catch(error => {
        res.sendStatus(500);
        console.log(`error POSTing in feedback.router`, error);
    })
})

router.put('/:id', (req, res) => {
    pool.query('UPDATE "feedback" SET "flagged" = NOT flagged WHERE "id" = $1;',
        [req.params.id]).then(
            (response) => { res.sendStatus(200); }).catch(error => {
                res.sendStatus(500);
                console.log(`error in PUT in feedback.router`, error);
            })
})

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id = $1;', [req.params.id]).then(
        (response) => { res.sendStatus(200); }).catch(error => {
            res.sendStatus(500);
            console.log(`error in DELETE feedback.router`, error);
        })
})

module.exports = router;
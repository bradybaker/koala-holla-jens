const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "koalas" ORDER BY "name";`;
    pool.query(sqlText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('Error in getting Koalas', error);
            res.sendStatus(500);
        });
})

// POST


// PUT
koalaRouter.put('/:id', (req, res) => {
    let koala = req.body;
    let id = req.params.id;
    let sqlText = `UPDATE koalas SET ready_to_transfer='Y' WHERE id=$1;`;
    pool.query(sqlText, [id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error when changing transfer status', error)
        res.sendStatus(500);
    }) 
    console.log(`Updating koala ${id} with`, koala);
})

// DELETE

module.exports = koalaRouter;
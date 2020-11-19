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


// DELETE

module.exports = koalaRouter;
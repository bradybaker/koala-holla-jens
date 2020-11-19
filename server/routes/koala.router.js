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
koalaRouter.post('/', (req, res) => {
    let newKoala = req.body;
    let sqlText = `INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
                    VALUES ($1, $2, $3, $4, $5);`
    pool.query(sqlText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.readyForTransfer, newKoala.notes])
        .then( (result) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log('Error in posting Koalas', error);
            res.sendStatus(500);
        })
})

// PUT


// DELETE

module.exports = koalaRouter;
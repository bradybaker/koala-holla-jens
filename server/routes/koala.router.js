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

koalaRouter.delete('/:id', (req, res) =>{
    let id = req.params.id;
    let sqlText = `DELETE FROM koalas WHERE id=$1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log('Got back', result.rows);
            //delete sends back an ok status, client will then ask for all the data with a GET
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error from db', error);
            res.sendStatus(500);
        })
})

module.exports = koalaRouter;
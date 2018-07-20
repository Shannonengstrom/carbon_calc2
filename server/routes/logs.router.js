const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// new log form inputs - POST
router.post('/', (req, res) => {
    console.log('in router.post', req.body);
    const id = req.user.id;
    // const newEmis = req.body.body;
    // console.log('this is newEmis:', newEmis);
    const newLog = req.body;
    const queryText =  `INSERT INTO logs ("mode", "co2_emis", "destination", "date", "miles", "notes", "total_emis", "person_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const queryValues = [
        newLog.mode,
        newLog.co2_emis,
        newLog.destination, 
        newLog.date, 
        newLog.miles, 
        newLog.notes,
        newLog.total_emis, 
        id
    ];
    pool.query(queryText, queryValues)
    .then((result) => { res.sendStatus(201); 
    })
    .catch((err) => {
      console.log('Error completing INSERT log query', err);
      res.sendStatus(500);
    });
});


// all results page - GET
router.get('/', (req, res) => {
    console.log('this is req.user:', req.user.id);
    const id = req.user.id;
    const queryText = `SELECT * FROM logs WHERE person_id=$1 
    ORDER BY id ASC`;
    // const queryText = `SELECT * FROM logs`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
        console.log('this is result.rows:', result.rows);
        
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
  });

  router.get('/total', (req, res) => {
    console.log('in router.get');
    const queryText = `SELECT SUM(total_emis)
    FROM logs`;
    pool.query(queryText).then((result) => {
        console.log('in router.get for total', result.rows);
        res.send(result.rows);
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
  });
  
  router.delete('/', (req, res) => {
    const queryText = `DELETE FROM logs WHERE id=$1`;
    pool.query(queryText, [req.query.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE logs query', err);
        res.sendStatus(500);
      });
  });

  router.put('/edit', (req, res) => {
    const edit = req.body;
    const id = req.body.id;
    console.log('in edit router put - req.body:', edit);
    console.log('in router put - id:', id);
    const queryText = `UPDATE logs
    SET "mode" = $1, "co2_emis" = $2, "destination" = $3, "date" = $4, "miles" = $5, "notes" = $6, "total_emis" = $7
    WHERE id = ${id};`;
    const queryValues = [
        edit.mode, 
        edit.co2_emis, 
        edit.destination, 
        edit.date, 
        edit.miles, 
        edit.notes, 
        edit.total_emis
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error updating logs query', err);
        res.sendStatus(500);
      });
  });

  router.get('/:id', (req, res) => {
    console.log('in router.get');
    const queryText = 'SELECT * FROM logs WHERE id = $1';
    const id = req.params.id;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
  });
  

module.exports = router;
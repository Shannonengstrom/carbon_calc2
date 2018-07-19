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
    console.log('in router.get');
    const queryText = 'SELECT * FROM logs';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
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

  router.put('/', (req, res) => {
    const queryText = `DELETE FROM logs WHERE id=$1`;
    pool.query(queryText, [req.query.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing DELETE logs query', err);
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
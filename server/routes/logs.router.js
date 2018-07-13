const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// new log form inputs - POST

router.post('/', (req, res) => {
    const newLog = req.body; 
    const queryText =  `INSERT INTO logs ("co2_emis_id", "destination", "date", "miles", "notes", "total_emis", "total_saved")
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newLog.destination, 
        newLog.date, 
        newLog.miles, 
        newLog.notes, 
        newLog.total_emis
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing INSERT log query', err);
      res.sendStatus(500);
    });
})


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
  
  
  // router.get('/log/:id', (req, res) => {
  //   const queryText = 'SELECT * FROM logs WHERE id=$1';
  //   pool.query(queryText, [req.params.id])
  //     .then((result) => { res.send(result.rows); })
  //     .catch((err) => {
  //       console.log('Error completing SELECT log query', err);
  //       res.sendStatus(500);
  //     });
  // });

  

module.exports = router;
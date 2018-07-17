const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// new log form inputs - POST

router.post('/', (req, res) => {
    console.log('in router.post', req.body);
    const id = req.user.id;
    // const co2_emis_id = req.body. 
    const newInput = req.body.body.newInput; 
    const newCo2 = req.body;
    const queryText =  `INSERT INTO logs ("co2_emis_id", "destination", "date", "miles", "notes", "total_emis", "total_saved", "person_id")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const queryValues = [
        newCo2.co2_emis_id,
        newInput.destination, 
        newInput.date, 
        newInput.miles, 
        newInput.notes,
        newInput.total_emis, 
        newInput.total_saved,
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
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// all results page

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
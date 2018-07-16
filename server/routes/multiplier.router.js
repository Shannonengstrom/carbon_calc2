const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in router.get');
    const queryText = 'SELECT * FROM co2_emis WHERE id=$1';
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log(result);
        
        res.send(result.rows);
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
  });

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// all results page total - GET
router.get('/', (req, res) => {
    const queryText = `SELECT SUM(total_emis)
    FROM logs`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error making query', err);
        res.sendStatus(500);
    });
  });
  

module.exports = router;
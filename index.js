const express = require('express');
const app = express();
const db = require('./queries');


app.get('/groups/', async (req, res) => {
    const data = await db.query("SELECT list FROM groups WHERE tense=$1 AND type=$2", 
    [req.query.tense, req.query.type]);
    return res.json(data);
});


module.exports = app;
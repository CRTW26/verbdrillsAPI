const express = require('express');
const app = express();
const db = require('./queries');

app.get('/groups/', function(req, res) {
    db.getVerbs((error, results) => {
        if (error) {
            throw error;
        }
        res.json(results.rows);
    });

    // if (req.query.type === 'regular') {
    //     res.json('regular')
    // } else {
    //     res.send('Groups available: Regular, Preterite, Imprefect, Future')
    // }
});


module.exports = app;
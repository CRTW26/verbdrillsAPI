const express = require('express');
const app = express();

app.get('/groups/', function(req, res) {
    if (req.query.type === 'regular') {
        res.json('regular')
    } else {
        res.send('Groups available: Regular, Preterite, Imprefect, Future')
    }
});


module.exports = app;
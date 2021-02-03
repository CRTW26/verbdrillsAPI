const express = require('express');
const app = express();

app.get('/groups', function(req, res) {
    res.send('Groups available: Regular, Preterite, Imprefect, Future');
});


module.exports = app;
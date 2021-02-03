const express = require('express');
const app = express();

app.get('/groups', function(req, res) {
    res.send('Bye ');
});


module.exports = app;
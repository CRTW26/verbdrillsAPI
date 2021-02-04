import verbGroups from './routes/verbGroups';
import express from 'express';

const app = express();
const db = require('./queries');


app.use('/verbgroups/', verbGroups);

module.exports = app;
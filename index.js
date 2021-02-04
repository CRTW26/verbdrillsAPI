import verbGroups from './routes/verbGroups';
import express from 'express';

const app = express();


app.use('/verbgroups/', verbGroups);

module.exports = app;
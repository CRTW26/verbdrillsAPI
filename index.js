import verbGroups from './routes/verbGroups';
import users from './routes/users';
import express from 'express';

const app = express();


app.use('/verbgroups/', verbGroups);
app.use('/users/', users);

module.exports = app;
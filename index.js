import verbGroups from './routes/verbGroups';
import users from './routes/users';
import express from 'express';

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use('/verbgroups/', verbGroups);
app.use('/users/', users);

module.exports = app;
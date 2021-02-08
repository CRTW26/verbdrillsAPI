import verbGroups from './routes/verbGroups';
import users from './routes/users';
import reference from './routes/reference';
import express from 'express';

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use('/verbgroups/', verbGroups);
app.use('/users/', users);
app.use('/reference/', reference);

module.exports = app;
import verbGroups from './routes/verbGroups';
import users from './routes/users';
import express from 'express';
import keyValidation from './auth/keyValidation';

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(keyValidation);

app.use('/verbgroups/', verbGroups);
app.use('/users/', users);

module.exports = app;
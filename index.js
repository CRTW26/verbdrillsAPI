import verbGroups from './routes/verbGroups';
import users from './routes/users';
import reference from './routes/reference';
import express from 'express';

const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


// app.use(cors({
//     origin: "http://localhost:8080/signup"
// }));

app.use('/verbgroups/', verbGroups);
app.use('/users/', users);
app.use('/reference/', reference);

module.exports = app;
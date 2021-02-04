require("@babel/register");
require("@babel/polyfill");

var app = require('./index.js');
var PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
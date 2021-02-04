const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    database: 'verbdrillsapi',
    port: 5432
})

const getVerbs = (callback) => {
    pool.query('SELECT * FROM groups', callback);
}

module.exports = {
    getVerbs
}
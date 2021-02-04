const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    database: 'verbdrillsapi',
    port: 5432
})

const getVerbs = (req, res) => {
    pool.query('SELECT * FROM groups', (err, results) => {
        if (err) {
            throw err
        }
        response.status(200).json(results.rows);
    })
}

modules.exports = {
    getVerbs
}
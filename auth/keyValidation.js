import db from '../db';

const keyValidation = async (req, res, next) => {
    // console.log(req.query.key)
    // console.log(String(req.query.key));
    // const query = `SELECT key FROM users WHERE key=${req.query.key}`
    // console.log(query)
    const apiKey = req.query.key;
    const keys = await db.query("SELECT key FROM users WHERE key=$1", [req.query.key]);
    // console.log(keys.rows.length);

    if (!apiKey) {
        return res.status(400).send({
            response: "Missing API key"
        });
    }  

    if (keys.rows.length === 1) {
        next();
    } else {
        res.status(400).send({
            response: "Invalid API key"
        });
    }
}

export default keyValidation;
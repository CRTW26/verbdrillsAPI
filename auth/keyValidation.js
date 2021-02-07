import db from '../db';

const keyValidation = async (req, res, next) => {
    const apiKey = req.query.key;
    const keys = await db.query("SELECT key FROM users");
    const keyArr = keys.rows.map(x => x.key);

    if (!apiKey) {
        return res.status(400).send({
            response: "Missing API key"
        });
    }  

    if (keyArr.includes(apiKey)) {
        next();
    } else {
        return res.status(400).send({
        response: "Invalid API key"
    });
    }

}

export default keyValidation;
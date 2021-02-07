import db from '../db';

const keyValidation = async (req, res, next) => {
    const apiKey = req.query.key;
//     console.log(req.query)
//     console.log(apiKey);
//     next();
// }

    if (!apiKey) {
        return res.status(400).send({
            response: "Missing API key"
        });
    }  
    // else {
    //     const keys = await db.query("SELECT key from users");
    //     console.log(keys.rows);
    //     const keyArr = keys.rows.map(x => x.key);
    //     console.log(keyArr)
    //     // const sorted = keyArr.map(x => x.key)
    //     next();
    // }

    const keys = await db.query("SELECT key FROM users");
    const keyArr = keys.rows.map(x => x.key);
    if (keyArr.includes(apiKey)) {
        next();
    } else {
        return res.status(400).send({
        response: "Invalid API key"
    });
    }
    
    // try {
    //     const keys = await db.query("SELECT key FROM users");
    //     const keyArr = keys.rows.map(x => x.key);
    //     if (keyArr.includes(apiKey)) {
    //         next();
    //     }
    // } catch (e) {
    //     console.log('%%%%%%%% error :', e); 
    //     return res.status(400).send({
    //         response: "Invalid API key"
    //     });
    // }
}

export default keyValidation;
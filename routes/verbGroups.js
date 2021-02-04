import { Router } from 'express';
const db = require('../queries');
let router = Router();

router.get('/hello/', (req,res) => {
    res.send('hello');
});

router.get('/', async (req, res) => {
    const data = await db.query("SELECT list FROM groups WHERE tense=$1 AND type=$2", 
    [req.query.tense, req.query.type]);
    return res.json(data.rows[0].list);
});

export default router; 
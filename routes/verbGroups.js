import keyValidation from '../auth/keyValidation';
import { Router } from 'express';
import db from '../db';
let router = Router();

router.get('/hello/', (req,res) => {
    res.send('hello');
});

router.get('/', keyValidation, async (req, res) => {
    const data = await db.query("SELECT list FROM groups WHERE tense=$1 AND type=$2", 
    [req.query.tense, req.query.type]);
    return res.json(data.rows[0].list);
});

export default router; 
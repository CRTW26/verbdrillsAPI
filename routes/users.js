import { Router }  from 'express';
import db from '../db';
let router = Router();

router.get('/hello/', (req,res) => {
    res.send('hello');
});

router.get('/', async (req, res) => {
    const data = await db.query("SELECT * FROM users");
    return res.json(data.rows);
});

export default router; 
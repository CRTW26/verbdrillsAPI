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

router.get('/:id/', async (req, res) => {
    const id = parseInt(req.params.id);
    const data = await db.query("SELECT username FROM users WHERE id=$1", [id]);
    return res.json(data.rows[0]);
});


export default router; 
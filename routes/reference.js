import { Router } from 'express';
import db from '../db';
let router = Router();

router.get('/:verb', async (req, res) => {
    console.log(req.params)
    const data = await db.query("SELECT * FROM verbs WHERE infinitive=$1", [req.params.verb]);
    console.log(data.rows);
    return res.json(data.rows);
});

export default router; 
import { Router } from 'express';
import db from '../db';
let router = Router();

router.get('/:verb', async (req, res) => {
    const data = await db.query("SELECT * FROM verbs WHERE infinitive=$1", [req.params.verb]);
    return res.json(data.rows);
});

export default router; 
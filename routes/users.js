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

router.post('/', async (req, res) => {
    const data = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
        [req.body.username, req.body.password]);
    const returnValues = {id: data.rows[0].id, username: data.rows[0].username};
    return res.json(returnValues);
});

router.patch('/:id', async (req, res) => {
    const data = await db.query(
        "UPDATE users SET username=$1 WHERE id=$2 RETURNING id, username",
        [req.body.username, req.params.id]
    );
    const returnValues = {id: data.rows[0].id, username: data.rows[0].username};
    return res.json(returnValues);
});

export default router; 
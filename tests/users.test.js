process.env.NODE_ENV = 'test';
const app = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);
import db from '../db';

describe('users routes', () => {

    // beforeAll(async () => {
    //     await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30))");
    // });

    beforeEach(async () => {
        await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30))");
        await db.query("INSERT INTO users (username, password) VALUES ('user1', 'password')");
        await db.query("INSERT INTO users (username, password) VALUES ('user2', 'password')");
    });

    afterEach(async () => {
        // await db.query('DELETE FROM users');
        await db.query("DROP TABLE users");
    });

    afterAll(async () => {
        // await db.query("DROP TABLE users");
        db.end();
    });

    test('GET /users/', async () => {
        const response = await request.get('/users/');
        expect(response.body.length).toEqual(2);
    });

    test('users/:id/', async () => {
        const response = await request.get('/users/1');
        expect(response.body.username).toEqual('user1');
    });

    test('POST /users/', async () => {
        const newUser = await request
            .post('/users/')
            .send({
                username: 'user3',
                password: 'password123'
            });
        expect(newUser.body).toHaveProperty('id');
        expect(newUser.body.username).toBe('user3');
        expect(newUser.statusCode).toBe(200);
    });

    test('PATCH /users/:id', async () => {
        const newUser = await request
        .post('/users/')
        .send({
            username: 'user3',
            password: 'password123'
        });
        const updatedUser = await request 
            .patch(`/users/${newUser.body.id}`)
            .send({username: "user33"});
        expect(updatedUser.body.username).toEqual('user33');
        expect(updatedUser.body).toHaveProperty("id");
        expect(updatedUser.statusCode).toBe(200);
    });

    test('DELETE /users/:id', async () => {
        const newUser = await request
        .post('/users/')
        .send({
            username: 'user3',
            password: 'password123'
        });
        const deletedUser = await request 
            .delete(`/users/${newUser.body.id}`);
        expect(deletedUser.body).toEqual({message: "deleted"});
        expect(deletedUser.statusCode).toBe(200);
    });

})
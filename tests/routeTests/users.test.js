process.env.NODE_ENV = 'test';
const app = require('../../index.js');
const supertest = require('supertest');
const request = supertest(app);
import db from '../../db';

describe('users routes', () => {

    // beforeAll(async () => {
    //     await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30))");
    // });

    beforeEach(async () => {
        await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30), key VARCHAR(5))");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user1', 'password', 'abc')");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user2', 'password', 'def')");
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
        expect(response.statusCode).toBe(200);
    });

    test('users/:id/', async () => {
        const response = await request.get('/users/1/');
        expect(response.body.username).toEqual('user1');
        expect(response.statusCode).toBe(200);
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

        const response = await request.get('/users/');
        expect(response.body.length).toEqual(3);
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

        const response = await request.get('/users/');
        expect(response.body.length).toEqual(3);
    });

    test('DELETE /users/:id', async () => {
        const newUser = await request
        .post('/users/')
        .send({
            username: 'user3',
            password: 'password123'
        });
        const deletedUser = await request 
            .delete(`/users/${newUser.body.id}/`);
        expect(deletedUser.body).toEqual({message: "deleted"});
        expect(deletedUser.statusCode).toBe(200);

        const response = await request.get('/users/');
        expect(response.body.length).toEqual(2);
    });

})
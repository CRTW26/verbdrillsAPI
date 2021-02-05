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

    test('/users/', async () => {
        const response = await request.get('/users/');
        expect(response.body.length).toEqual(2);
    });

    test('users/:id/', async () => {
        const response = await request.get('/users/1');
        console.log(response.body)
        expect(response.body.username).toEqual('user1');
    })
})
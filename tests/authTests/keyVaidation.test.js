process.env.NODE_ENV = 'test';
const app = require('../../index.js');
const supertest = require('supertest');
const request = supertest(app);
import db from '../../db';

describe('key validtion', () => {
    beforeEach(async () => {
        //Create verb groups table
        await db.query("CREATE TABLE groups (tense VARCHAR(30), type VARCHAR(15), list json)");
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('present', 'regular', '{\"regular\": {\"hablar\": [\"hablo\"]}}')")
        //Create users table
        await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30), key VARCHAR(5))");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user1', 'password', 'abc')");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user2', 'password', 'abc')");
    });

    afterEach(async () => {
        // await db.query('DELETE FROM users');
        await db.query('DROP TABLE groups');
        await db.query("DROP TABLE users");
    });

    afterAll(async () => {
        // await db.query("DROP TABLE users");
        // await db.query("DROP TABLE groups");
        db.end();
    });
    
    test('/verbgroups/?tense=present&type=regular&key=abc', async () => {
        const response = await request.get('/verbgroups/?tense=present&type=regular&key=abc');
        expect(response.statusCode).toBe(200);
    });

    test('/verbgroups/?tense=present&type=regular', async () => {
        const response = await request.get('/verbgroups/?tense=present&type=regular');
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqua;("Missing API key");
    });
})
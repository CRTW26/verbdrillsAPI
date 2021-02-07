process.env.NODE_ENV = 'test';
const app = require('../../index.js');
const supertest = require('supertest');
const request = supertest(app);
import db from '../../db';

describe('verbGroups routes', () => {

    // let server; 

    // beforeEach(() => {
    //     server = app.listen(3001);
    // })

    // afterEach(async () => {
    //     db.end
    //     await server.close();
    // })

    // beforeAll(async () => {
    //     await db.query("CREATE TABLE groups (tense VARCHAR(30), type VARCHAR(15), list json)");
    // });

    beforeEach(async () => {
        await db.query("CREATE TABLE groups (tense VARCHAR(30), type VARCHAR(15), list json)");
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('present', 'regular', '{\"regular\": {\"hablar\": [\"hablo\"]}}')")
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('preterite', 'regular', '{\"regular\": {\"hablar\": [\"hable\"]}}')")
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('imperfect', 'regular', '{\"regular\": {\"hablar\": [\"hablaba\"]}}')")

        await db.query("CREATE TABLE users (ID SERIAL PRIMARY KEY, username VARCHAR(30), password VARCHAR(30), key VARCHAR(5))");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user1', 'password', 'abc')");
        await db.query("INSERT INTO users (username, password, key) VALUES ('user2', 'password', 'def')");
    });

    afterEach(async () => {
        await db.query('DROP TABLE groups');
        await db.query("DROP TABLE users");
    });

    afterAll(async () => {
        db.end();
    });

    test('/verbgroups/?tense=present&type=regular', async () => {
        const response = await request.get('/verbgroups/?tense=present&type=regular&key=abc');
        expect(response.body.regular.hablar[0]).toEqual('hablo');
    });

    test('/verbgroups/?tense=preterite&type=regular', async () => {
        const response = await request.get('/verbgroups/?tense=preterite&type=regular&key=abc');
        expect(response.body.regular.hablar[0]).toEqual('hable');
    });

    test('/verbgroups/?tense=imperfect&type=regular', async () => {
        const response = await request.get('/verbgroups/?tense=imperfect&type=regular&key=abc');
        expect(response.body.regular.hablar[0]).toEqual('hablaba');
    });

})
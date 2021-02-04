process.env.NODE_ENV = 'test';
const app = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);
const db = require('../queries');

describe('Testing API routes', () => {

    // let server; 

    // beforeEach(() => {
    //     server = app.listen(3001);
    // })

    // afterEach(async () => {
    //     db.end
    //     await server.close();
    // })

    beforeAll(async () => {
        await db.query("CREATE TABLE groups (tense VARCHAR(30), type VARCHAR(15), list json)");
    });

    beforeEach(async () => {
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('present', 'regular', '{\"regular\": {\"hablar\": [\"hablo\"]}}')")
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('preterite', 'regular', '{\"regular\": {\"hablar\": [\"hable\"]}}')")
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('imperfect', 'regular', '{\"regular\": {\"hablar\": [\"hablaba\"]}}')")
    });

    afterEach(async () => {
        await db.query('DELETE FROM groups');
    });

    afterAll(async () => {
        await db.query("DROP TABLE groups");
        db.end();
    });

    test('/groups/?tense=present&type=regular', async () => {
        const response = await request.get('/groups/?tense=present&type=regular');
        expect(response.body.rows[0].list.regular.hablar[0]).toEqual('hablo');
    });

    test('/groups/?tense=preterite&type=regular', async () => {
        const response = await request.get('/groups/?tense=preterite&type=regular');
        expect(response.body.rows[0].list.regular.hablar[0]).toEqual('hable');
    });

    test('/groups/?tense=imperfect&type=regular', async () => {
        const response = await request.get('/groups/?tense=imperfect&type=regular');
        expect(response.body.rows[0].list.regular.hablar[0]).toEqual('hablaba');
    });

})
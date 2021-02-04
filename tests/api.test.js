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

    afterAll(async () => {
        await db.query("DROP TABLE groups");
        db.end();
    });

    test('/groups/?tense=present&type=regular', async () => {
        await db.query("INSERT INTO groups (tense, type, list) VALUES ('present', 'regular', '{\"regular\": {\"hablar\": [\"hablo\"]}}')")
        const response = await request.get('/groups/?tense=present&type=regular');
        expect(response.body.rows[0].list.regular.hablar[0]).toEqual('hablo');
    })

})
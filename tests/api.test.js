const app = require('../index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Testing API routes', () => {

    let server; 

    beforeEach(() => {
        server = app.listen(3001);
    })

    afterEach(async () => {
        await server.close();
    })

    test('/groups', async ()  => {
        const response = await request.get('/groups');
        expect(response.status).toBe(200);
        expect(response.type).toBe
    });

})
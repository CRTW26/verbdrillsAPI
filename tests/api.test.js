describe('Testing API routes', () => {

    const app = require('../index.js');
    const supertest = require('supertest');
    const request = supertest(app);

    test('/groups', async ()  => {
        const response = await request.get('/groups');
        expect(response.status).toBe(200);
    });

})
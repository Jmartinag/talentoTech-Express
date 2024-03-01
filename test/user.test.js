const request = require('supertest');
const app = require('../index.js');

describe ('GET /', () => {
    it('responds with status 200', async () => {
        //Solicitud get en ruta principal
        const response = await request(app).get('/');
        //Verificar status
        //console.log(response)
        expect(response.status).toBe(200);
    })
    it('responds with test Hello world', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello world');
    })
})
const request = require('supertest');
const app = require('../app');

describe('app', function(){
    it('Tiene que servir html en index', (done) => {
        request(app).get('/').expect('Content-Type', /html/).expect(200, done)
    })
})
const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');

describe('ROOT /', () => {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});


describe('/:time', () => {
    it('should return a object with unix and natural time', (done) => {
        var time = "December 15, 2015";
        request(app)
            .get(`/${time}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.natural).toBe("December 15, 2015");
                expect(res.body.unix).toBe(1450137600);
            })
            .end(done);
    });

    it('should return null value for unix and natural time', (done) => {
        var time = "1sdasdfasd";
        request(app)
            .get(`/${time}`)
            .expect(400)
            .expect((res) => {
                expect(res.body.natural).toBeFalsy();
                expect(res.body.unix).toBeFalsy();
            })
            .end(done);
    })
});
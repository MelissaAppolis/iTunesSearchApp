let expect = require('chai').expect;
let request = require('request');

describe('Status', function() {
    describe ('Landing Page', function() {
        it('status', function(done) {
            request('http://localhost:3001/', function(error, response, body) {
                expect(response.statusCode).to.equal(500);
                done();
            });
        });
    });
});

describe('Status', function() {
    describe ('Search Page', function() {
        it('status', function(done) {
            request('http://localhost:3001/search/:name/:type', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});
const expect = require('chai').expect;

const { inves } = require('../../routes/wallet/inves');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Inves add Public Key', function() {
    describe('Get method function', function() {
        it('Should error if no public key provided ', function() {
            inves.get(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});
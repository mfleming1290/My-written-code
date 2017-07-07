const assert = require('assert');
const User = require('../src/user');

describe('updating records', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({ name: 'Joe' });
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            });
    }

    it('instance type set n save', (done) => {
        joe.set('name', 'Alex');
        assertName(joe.save(), done)

    });

    it('A model instance can update', function(done) {
        assertName(joe.update({ name: 'Alex' }), done)
    });

});
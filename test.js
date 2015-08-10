var test = require('tape');
var assert = require('./');

test('Assertik', function (t) {
	t.throws(function () {
		assert(false);
	}, Error, 'should throw assert(false)');

	t.doesNotThrow(function () {
		assert(true);
	}, Error, 'shouldn\'t throw assert(true)');

	t.throws(function () {
		assert.equal(1, 2);
	}, Error, 'should throw assert.equal(1, 2)');

	t.doesNotThrow(function () {
		assert.equal(1, 1);
	}, Error, 'shouldn\'t throw assert.equal(1, 1)');

	t.end();
});

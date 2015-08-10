(function () {
	if(typeof exports === 'object') {
		module.exports = assert;
	} else {
		window.assertik = assert;
	}

	function assert(val, msg) {
		if(!val) {
			throwAssertion(msg || [String(val), '==', true].join(' '), val, true, '==', assert);
		}
	}

	assert.equal = function assertEqual(actual, expected, msg) {
		if(actual != expected) {
			throwAssertion(msg || [JSON.stringify(actual), '==', JSON.stringify(expected)].join(' '), actual, expected, '==', assertEqual);
		}
	};

	function throwAssertion(message, actual, expected, operator, stackStartFunction) {
		var err = new Error(message);
		err.name = 'AssertionError';
		err.actual = actual;
		err.expected = expected;
		err.operator = operator;
		if(Error.captureStackTrace) {
			Error.captureStackTrace(err, stackStartFunction);
		}

		throw err;
	}
} ());

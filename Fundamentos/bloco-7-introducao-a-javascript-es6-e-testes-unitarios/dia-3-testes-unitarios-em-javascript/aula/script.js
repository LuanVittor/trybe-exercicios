const assert = require('assert');

const sum = (num1, num2) => num1 + num2;

const expected = sum(5, 4);

assert.strictEqual(expected, 9, '5 + 4 = 9');
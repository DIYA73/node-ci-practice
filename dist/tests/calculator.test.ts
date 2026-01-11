import test from 'node:test';
import assert from 'node:assert/strict';
import { add, multiply } from '../../src/calculator.js';
;

test('add numbers', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('multiply numbers', () => {
    assert.strictEqual(multiply(2, 3), 6);
});

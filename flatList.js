"use strict";

let _ = require('lodash')

function flatList(array) {
    return _.flattenDeep(array)
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(flatList([1, 2, 3]), [1, 2, 3], "First");
    assert.deepEqual(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "Second");
    assert.deepEqual(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Third");
    assert.deepEqual(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "Four");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
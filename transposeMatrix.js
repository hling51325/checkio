"use strict";

function transposeMatrix(data) {
    let transform = []
    for (let i = 0; i < data[0].length; i++) {
        transform.push(data.map((_, _i) => data[_i][i]))
    }
    return transform
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(transposeMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[1, 4, 7], [2, 5, 8], [3, 6, 9]], "Square matrix");
    assert.deepEqual(transposeMatrix([[1, 4, 3], [8, 2, 6], [7, 8, 3], [4, 9, 6], [7, 8, 1]]), [[1, 8, 7, 4, 7], [4, 2, 8, 9, 8], [3, 6, 3, 6, 1]], "Rectangle matrix");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

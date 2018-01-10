"use strict";

function goodRadix(number) {
    let result = 0
    let minK = 2
    for (let i = 0; i < number.length; i++) {
        let char = number.charAt(i)
        let k
        if (/[A-z]/.test(char)) {
            char = char.toUpperCase()
            k = char.codePointAt() - 'A'.codePointAt() + 10
        } else if (/[0-9]/.test(char)) {
            k = Number(char)
        }
        minK = k > minK ? k : minK
    }
    for (let k = minK; k < 37; k++) {
        if (parseInt(number, k) % (k - 1) === 0) {
            result = k
            break;
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(goodRadix("18"), 10, "Simple decimal");
    assert.equal(goodRadix("1010101011"), 2, "Any number is divisible by 1");
    assert.equal(goodRadix("222"), 3, "3rd test");
    assert.equal(goodRadix("A23B"), 14, "It's not a hex");
    assert.equal(goodRadix("IDDQD"), 0, "k is not exist");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

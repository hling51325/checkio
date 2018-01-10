"use strict";

function verifyAnagrams(first_word, second_word) {
    return job(first_word) === job(second_word)

    function job(word) {
        return word.toLowerCase().replace(/\s/g, '').split('').sort().join('')
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
    assert.equal(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
    assert.equal(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
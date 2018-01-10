"use strict";

function correctSentence(text) {
    let arr = text.split('')
    arr[0] = arr[0].toUpperCase()
    if (arr[arr.length - 1] !== '.') {
        arr.push('.')
    }
    return arr.join('');
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}

"use strict";

function countWords(text, words) {
    let count = 0
    text = text.toLowerCase()
    words.forEach(word => {
        if (text.includes(word)) {
            count++
        }
    })
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countWords("How aresjfhdskfhskd you?", ["how", "are", "you", "hello"]), 3, "Example");
    assert.equal(countWords("Bananas, give me bananas!!!", ["banana", "bananas"]), 2, "BANANAS!");
    assert.equal(countWords("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", ["sum", "hamlet", "infinity", "anything"]), 1, "Weird text");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

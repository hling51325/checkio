"use strict";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function checkPangram(text) {
    text = text.toLowerCase()
    let rest = ALPHABET.filter(char => {
        return !text.includes(char)
    })
    return rest.length === 0;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(checkPangram("The quick brown fox jumps over the lazy dog."), true, "brown fox");
    assert.equal(checkPangram("ABCDEF"), false, "ABC");
    assert.equal(checkPangram("Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!"), true, "Bored?");
    console.log("If it is done - it is Done. Go Check is NOW!");
}
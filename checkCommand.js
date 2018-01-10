"use strict";

function checkCommand(pattern, command) {
    let str = pattern.toString(2)
    let diffLength = command.length - str.length
    if (diffLength < 0) return false
    let result = true
    for (let i = 0; i < diffLength; i++) {
        str = '0' + str
    }
    for (let i = 0; i < command.length; i++) {
        if (/[A-z]/.test(command.charAt(i))) {
            if (str.charAt(i) !== '1') {
                result = false
            }
        } else if (/[0-9]/.test(command.charAt(i))) {
            if (str.charAt(i) !== '0') {
                result = false
            }
        } else {
            result = false
        }
    }
    return result
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(checkCommand(42, "12a0b3e4"), true, "42 is the answer");
    assert.equal(checkCommand(101, "ab23b4zz"), false, "one hundred plus one");
    assert.equal(checkCommand(0, "478103487120470129"), true, "Any number");
    assert.equal(checkCommand(127, "Checkio"), true, "Uppercase");
    assert.equal(checkCommand(7, "Hello"), false, "Only full match");
    assert.equal(checkCommand(8, "a"), false, "Too short command");
    assert.equal(checkCommand(5, "H2O"), true, "Water");
    assert.equal(checkCommand(42, "C2H5OH"), false, "Yep, this is not the Answer");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

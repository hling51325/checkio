"use strict";

const FIRST_TEN = ["one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine"],
    SECOND_TEN = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"],
    OTHER_TENS = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy",
        "eighty", "ninety"],
    HUNDRED = "hundred";

function speechModule(number) {
    let str = ''
    if (number >= 100) {
        let one = Math.floor(number / 100)
        str += `${FIRST_TEN[one - 1]} ${HUNDRED} `
        number = number % 100
    }
    if (number >= 20) {
        let two = Math.floor(number / 10)
        str += OTHER_TENS[two - 2] + ' '
        number = number % 10
    }
    if (number >= 10 && number < 20) {
        let two = number - 10
        str += SECOND_TEN[two] + ' '
        number = 0
    }
    if (number) {
        str += FIRST_TEN[number - 1]
    }
    return str.trim()
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(speechModule(4), 'four', "four");
    assert.equal(speechModule(133), 'one hundred thirty three', "one hundred thirty three");
    assert.equal(speechModule(12), 'twelve', "twelve");
    assert.equal(speechModule(101), 'one hundred one', "one hundred one");
    assert.equal(speechModule(212), 'two hundred twelve', "two hundred twelve");
    assert.equal(speechModule(40), 'forty', "forty");
    console.log("Done! Go and Check IT!");
}

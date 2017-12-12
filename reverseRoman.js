function reverseRoman(roman) {
    let obj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    let number = 0
    let i = 0
    while (i < roman.length) {
        if (obj[roman.substring(i, i + 2)]) {
            number += obj[roman.substring(i, i + 2)]
            i += 2
        } else {
            number += obj[roman.substring(i, i + 1)]
            i += 1
        }
    }
    return number
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(reverseRoman('VI'), 6, "First")
    assert.equal(reverseRoman('LXXVI'), 76, "Second")
    assert.equal(reverseRoman('CDXCIX'), 499, "Third")
    assert.equal(reverseRoman('MMMDCCCLXXXVIII'), 3888, "Forth")
    console.log("Coding complete, Cesar? Click 'Check' to review your tests and earn cool rewards!");
}

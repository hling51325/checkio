function stepsToConvert(line1, line2) {

    let test = new RegExp(line1).test(line2)
    if (line1.length === line2.length && test) {
        return 0
    } else if (test && line1.length !== line2.length) {
        return Math.abs(line2.length - line1.length)
    } else if (!test && line1.length === line2.length) {
        let a = 0
        line2.split('').forEach((char, index) => {
            if (line1.charAt(index) !== char) a++;
        })
        return a
    } else if (!test && line1.length !== line2.length) {
        let a = 0
        line1.split('').forEach((char, index) => {
            if (new RegExp(char).test(line2)) a++
        })
        return Math.abs(line2.length - Math.abs(line2.length - line1.length) - a)
    }
}

const assert = require('assert');

assert.equal(stepsToConvert('line1', 'line1'), 0, "eq")
assert.equal(stepsToConvert('line1', 'line2'), 1, "2")
assert.equal(stepsToConvert('line', 'line2'), 1, "none to 2")
assert.equal(stepsToConvert('ine', 'line2'), 2, "need two more")
assert.equal(stepsToConvert('line1', '1enil'), 4, "everything is opposite")
assert.equal(stepsToConvert('', ''), 0, "two empty")
assert.equal(stepsToConvert('l', ''), 1, "one side")
assert.equal(stepsToConvert('', 'l'), 1, "another side")
console.log("You are good to go!");

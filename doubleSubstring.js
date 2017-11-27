function doubleSubstring(line) {
    let max = 0
    for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length + 1; j++) {
            if (line.substring(j).lastIndexOf(line.substring(i, j)) !== -1) {
                max = j - i > max ? j - i : max
            }
        }
    }
    return max
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(doubleSubstring('aaaa'), 2, "First")
    assert.equal(doubleSubstring('abc'), 0, "Second")
    assert.equal(doubleSubstring('aghtfghkofgh'), 3, "Third")
    console.log('"Run" is good. How is "Check"?');
}

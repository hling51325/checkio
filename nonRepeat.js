function nonRepeat(line) {
    let result = ''
    for (let i = 0; i < line.length; i++) {
        for (let j = i; j < line.length; j++) {
            let subStr = line.substring(i, j)
            subStr += line.charAt(j)
            if (subStr.indexOf(line.charAt(j)) !== subStr.lastIndexOf(line.charAt(j))) break
            result = subStr.length > result.length ? subStr : result
        }
    }
    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(nonRepeat('wq'), 'wq', "First")
    assert.equal(nonRepeat('abdjwawk'), 'abdjw', "Second")
    assert.equal(nonRepeat('abcabcffab'), 'abcf', "Third")
    console.log('"Run" is good. How is "Check"?');
}

function cutSentence(line, length) {
    if (length > line.length) return line
    if (line.charAt(length - 1) !== ' ' && line.charAt(length) !== ' ') {
        return line.substring(0, line.substring(0, length).lastIndexOf(' ')) + '...'
    } else if (line.charAt(length - 1) === ' ') {
        return line.substring(0, length - 1) + '...'
    } else {
        return line.substring(0, length) + '...'
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(cutSentence("Hi my name is Alex", 8), "Hi my...", "First")
    assert.equal(cutSentence("Hi my name is Alex", 4), "Hi...", "Second")
    assert.equal(cutSentence("Hi my name is Alex", 20), "Hi my name is Alex", "Third")
    console.log("Done! Do you like it? Go Check it!");
}

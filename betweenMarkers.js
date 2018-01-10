"use strict";

function betweenMarkers(text, begin, end) {
    let beginIndex = text.indexOf(begin)
    let endIndex = text.indexOf(end)
    if (beginIndex === -1) {
        beginIndex = 0
    } else {
        beginIndex = beginIndex + begin.length
    }
    if (endIndex === -1) {
        endIndex = undefined
    }
    if (beginIndex > endIndex) {
        return ''
    }
    return text.substring(beginIndex, endIndex)
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers("<head><title>My new site</title></head>",
        "<title>", "</title>"), 'My new site')
    assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
    assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
    assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
    assert.equal(betweenMarkers('No <hi>', '>', '<'), '')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

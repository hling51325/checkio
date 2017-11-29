function simplifyPath(path) {
    let array = path.split('/').filter(char => char)
    let result = array.reduce((curr, next) => {
        if (next === '.') return curr
        if (next === '..') {
            if (curr.length) {
                if (curr[curr.length - 1] !== '..') {
                    curr.pop()
                } else {
                    curr.push('..')
                }
            } else {
                curr.push('..')

            }
        } else {
            curr.push(next)
        }
        return curr
    }, [])

    if (path.charAt(0) === '/') {
        return '/' + result.filter(item => item !== '..' && item !== '.').join('/')
    }
    return result.length ? result.join('/') : '.'
}

var assert = require('assert');

if (!global.is_checking) {
    // last slash is not important
    assert.equal(simplifyPath('/a/'), '/a')

    // double slash can be united in one
    assert.equal(simplifyPath('/a//b/c'), '/a/b/c')

    // double dot - go to previous folder
    assert.equal(simplifyPath('dir/fol/../no'), 'dir/no')
    assert.equal(simplifyPath('dir/fol/../../no'), 'no')

    // one dot means current dir
    assert.equal(simplifyPath('/a/b/./ci'), '/a/b/ci')
    assert.equal(simplifyPath('vi/..'), '.')
    assert.equal(simplifyPath('./.'), '.')

    // you can't go deeper than root folder
    assert.equal(simplifyPath('/for/../..'), '/')
    assert.equal(simplifyPath('/for/../../no/..'), '/')

    // not all double-dots can be simplyfied in related path
    assert.equal(simplifyPath('for/../..'), '..')
    assert.equal(simplifyPath('../foo'), '../foo')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
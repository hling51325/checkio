function xoReferee(data) {
    data = data.join('').split('')
    let result
    if (data[0] !== '.' && data[0] === data[4] && data[4] === data[8]) result = data[0]
    if (data[2] !== '.' && data[2] === data[4] && data[4] === data[6]) result = data[2]
    if (!result) {
        data.forEach((item, index) => {
            if (item !== '.' && index % 3 === 0 && item === data[index + 1] && data[index + 1] === data[index + 2]) result = item
            if (item !== '.' && index < 3 && item === data[index + 3] && data[index + 3] === data[index + 6]) result = item
            result = result || 'D'
        })
    }
    return result
}

const assert = require('assert');

if (!global.is_checking) {
    assert.equal(xoReferee([
        "X.O",
        "XX.",
        "XOO"]), "X", "Xs wins");

    assert.equal(xoReferee([
        "OO.",
        "XOX",
        "XOX"]), "O", "Os wins");

    assert.equal(xoReferee([
        "OOX",
        "XXO",
        "OXX"]), "D", "Draw");

    assert.equal(xoReferee([
        "O.X",
        "XX.",
        "XOO"]), "X", "Xs wins again");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

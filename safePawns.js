function safePawns(data) {
    let count = 0
    data.forEach(pawn => {
        let a = String.fromCharCode(pawn.charAt(0).charCodeAt(0) - 1) + (Number(pawn.charAt(1)) - 1)
        let b = String.fromCharCode(pawn.charAt(0).charCodeAt(0) + 1) + (Number(pawn.charAt(1)) - 1)
        if (data.find(item => item === a || item === b)) count++
    })
    return count
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

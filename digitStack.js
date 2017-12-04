"use strict";

function digitStack(commands) {
    let stack = []
    let sum = 0
    commands.forEach(command => {
        if (command.includes('PUSH')) {
            stack.push(command.split(' ')[1])
        } else if (command.includes('POP')) {
            let top = stack.pop()
            if (top) sum += Number(top)
        } else if (command.includes('PEEK')) {
            let top = stack[stack.length - 1]
            if (top) sum += Number(top)
        }
    })
    return sum;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
            "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]),
        8, "Example");
    assert.equal(digitStack(["POP", "POP"]), 0, "pop, pop, zero");
    assert.equal(digitStack(["PUSH 9", "PUSH 9", "POP"]), 9, "Push the button");
    assert.equal(digitStack([]), 0, "Nothing");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
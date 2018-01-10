"use strict";

function letterQueue(commands) {
    let options = {
        PUSH(queue, data) {
            queue.push(data)
        },
        POP(queue) {
            queue.shift()
        }
    }
    let queue = []
    commands.forEach(command => {
        command = command.split(' ')
        let option = command[0]
        let data = command[1]
        options[option](queue, data)
    })
    return queue.join('');
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]), "DOT", "dot example");
    assert.equal(letterQueue(["POP", "POP"]), "", "Pop, Pop, empty");
    assert.equal(letterQueue(["PUSH H", "PUSH I"]), "HI", "Hi!");
    assert.equal(letterQueue([]), "", "Nothing");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

"use strict";

function disconnectedUsers(net, users, source, crushes) {
    let reg = new RegExp(crushes.join(''), 'g')
    net = net.join(',').replace(/,/g, '').split(reg).filter(net => net)
    let area = []
    for (let i = 0; i < net.length; i++) {
        let find = area.find(node => {
            return node.includes(net[i]) || net[i].includes(node)
        })
        if (find) {
            find = find + net[i]
        } else {
            area.push(net[i])
        }
    }
    let connectedArea = area.filter(node => !node.includes(source))
    let disconnectedCity = connectedArea.join('').split('')

    let arr = []
    disconnectedCity.forEach(c => {
        let find = arr.find(item => item === c)
        if (!find) arr.push(c)
    })
    arr = arr.concat(crushes)

    return arr.reduce((curr, next) => {
        return curr + users[next]
    }, 0)
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(disconnectedUsers([
            ['A', 'B'],
            ['B', 'C'],
            ['C', 'D']
        ], {
            'A': 10,
            'B': 20,
            'C': 30,
            'D': 40
        },
        'A', ['C']), 70, "First")
    assert.equal(disconnectedUsers([
            ['A', 'B'],
            ['B', 'D'],
            ['A', 'C'],
            ['C', 'D']
        ], {
            'A': 10,
            'B': 0,
            'C': 0,
            'D': 40
        },
        'A', ['B']), 0, "Second")
    assert.equal(disconnectedUsers([
            ['A', 'B'],
            ['A', 'C'],
            ['A', 'D'],
            ['A', 'E'],
            ['A', 'F']
        ], {
            'A': 10,
            'B': 10,
            'C': 10,
            'D': 10,
            'E': 10,
            'F': 10
        },
        'C', ['A']), 50, "Thirt")
    assert.equal(disconnectedUsers([["A", "B"], ["B", "C"], ["C", "D"]], {
        "A": 10,
        "C": 30,
        "B": 20,
        "D": 40
    }, "A", ["B"]), 90)
    console.log("Coding complete? Click 'Check' NOW!");
}


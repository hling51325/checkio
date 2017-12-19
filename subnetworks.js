"use strict";

function subnetworks(net, crushes) {
    let reg = new RegExp(crushes.join(''), 'g')
    let area = net.join(',').replace(/,/g, '').split(reg).filter(area => area)
    let count = 0
    area.forEach((node, index) => {
        let __index = area.findIndex(__node => __node.includes(node) || node.includes(__node))
        if (__index !== -1 && index !== __index) {

        } else {
            count++
        }
    })
    return count
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(subnetworks([
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D']
    ], ['B']), 2, "First")
    assert.equal(subnetworks([
        ['A', 'B'],
        ['A', 'C'],
        ['A', 'D'],
        ['D', 'F']
    ], ['A']), 3, "Second")
    assert.equal(subnetworks([
        ['A', 'B'],
        ['B', 'C'],
        ['C', 'D']
    ], ['C', 'D']), 1, "Third")
    assert.equal(subnetworks([["A", "B"], ["A", "C"], ["A", "D"], ["D", "F"], ["B", "C"]], ["A"]), 2, "Third")

    console.log("Done! Check button is waiting for you!");
}

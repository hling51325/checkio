"use strict";

function isFamily(tree) {
    let bool = true

    console.log(tree)
    tree.forEach((node, index) => {
        let a = false
        let b = false

        tree.forEach((s, __index) => {
            if (__index === index) return
            let __node = [node[1], node[0]]
            if (arraysEqual(__node, s)) {
                bool = false
            }
            if (node[0] === s[1]) {
                a = true
            }
            if (node[1] === s[1]) {
                b = true
            }
        })
        if (a && b) {
            bool = false
        }

        if (tree.length > 1) {
            let find = tree.find((__node, __index) => {
                if (__index === index) return false
                if (node[0] === __node[0] || node[0] === __node[1]
                    || node[1] === __node[0] || node[1] === __node[1]) {
                    return true
                }
            })
            if (!find) {
                bool = false
            }
        }
    })

    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a === null || b === null) return false;
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    return bool
}

var assert = require('assert');

if (!global.is_checking) {
    // assert.equal(isFamily([
    //     ['Logan', 'Mike']
    // ]), true, 'One father, one son');
    // assert.equal(isFamily([
    //     ['Logan', 'Mike'],
    //     ['Logan', 'Jack']
    // ]), true, 'Two sons');
    // assert.equal(isFamily([
    //     ['Logan', 'Mike'],
    //     ['Logan', 'Jack'],
    //     ['Mike', 'Alexander']
    // ]), true, 'Grandfather');
    // assert.equal(isFamily([
    //     ['Logan', 'Mike'],
    //     ['Logan', 'Jack'],
    //     ['Mike', 'Logan']
    // ]), false, 'Can you be a father for your father?');
    // assert.equal(isFamily([
    //     ['Logan', 'Mike'],
    //     ['Logan', 'Jack'],
    //     ['Mike', 'Jack']
    // ]), false, 'Can you be a father for your brather?');
    // assert.equal(isFamily([
    //     ['Logan', 'William'],
    //     ['Logan', 'Jack'],
    //     ['Mike', 'Alexander']
    // ]), false, 'Looks like Mike is stranger in Logan\'s family');
    assert.equal(isFamily([["Logan", "Mike"], ["Alexander", "Jack"], ["Jack", "Logan"]]), false);

    console.log("Looks like you know everything. It is time for 'Check'!");
}
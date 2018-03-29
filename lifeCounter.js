function lifeCounter(marbles, step) {
    let y = marbles.length
    let x = marbles[0].length

    for (let i = 0; i < step; i++) {
        let changes = []

        for (let __x = 0; __x < x; __x++) {
            for (let __y = 0; __y < y; __y++) {
                hasChange(__x, __y, changes)
            }
        }

        changes.forEach(([x, y]) => {
            marbles[y][x] = marbles[y][x] ? 0 : 1
        })

        console.log(marbles)
    }

    let sum = marbles.reduce((curr, next) => {
        let sum = next.reduce((curr, next) => {
            return curr + next
        }, 0)
        return curr + sum
    }, 0)

    console.log(sum)

    function hasChange(x, y, changes) {
        let array = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]
        if (x === 0) {
            array = array.filter(i => i[0] >= 0)
        }
        if (y === 0) {
            array = array.filter(i => i[1] >= 0)
        }
        let neighbours = array.reduce((curr, [dx, dy]) => {
            if (!marbles[y + dy] || !marbles[y + dy][x + dx]) return curr
            return curr + marbles[y + dy][x + dx]
        }, 0)
        if (marbles[y][x] && (neighbours < 2 || neighbours > 3)) {
            changes.push([x, y])
        }
        if (!marbles[y][x] && neighbours === 3) {
            changes.push([x, y])
        }
    }
}

const assert = require('assert');

assert.equal(lifeCounter([
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0]
], 4), 15, "Example");
assert.equal(lifeCounter([
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0]
], 15), 14, "Little later");
assert.equal(lifeCounter([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
], 50), 5, "Glider");
assert.equal(lifeCounter([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1]
], 100), 16, "Stones");
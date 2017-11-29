function biggerTogether(ints) {
    ints.sort((a, b) => {
        a = a.toString()
        b = b.toString()
        if (a.length === b.length) return a - b
        let diff = a.length - b.length
        if (diff > 0) {
            let bArray = b.split('')
            return a - (b + bArray[0] * diff)
        } else {
            let aArray = a.split('')
            return a + aArray[0] * Math.abs(diff) - b
        }
    })
    let min = ints.join('')
    ints.reverse();
    let max = ints.join('')
    return max - min;
}

var assert = require('assert');

assert.equal(biggerTogether([1, 2, 3, 4]), 3087, "4321 - 1234 = 3087")
assert.equal(biggerTogether([1, 2, 3, 4, 11, 12]), 32099877, "43212111 - 11112234 = 32099877")
assert.equal(biggerTogether([0, 1]), 9, "10 - 01 = 9")
assert.equal(biggerTogether([100]), 0, "100 - 100 = 0")
assert.equal(biggerTogether([3, 12, 22, 32]), 2099889, "100 - 100 = 0")
assert.equal(biggerTogether([420, 42, 423]), 381078, "100 - 100 = 0")


console.log("Done! I feel like you good enough to click Check");

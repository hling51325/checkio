function boxProbability(marbles, step) {
    marbles = marbles.split('')
    let count = marbles.length
    let array = [{
        w: marbles.filter(marble => marble === 'w').length,
        b: marbles.filter(marble => marble === 'b').length,
        rate: 1
    }]

    while (step > 1) {
        let curr = []
        array.forEach(item => {
            let result1 = Object.assign({}, item)
            let rate1 = result1.b / count * item.rate
            if (Math.abs(result1.w + 1) % count === 0) {
                result1.w = Math.abs(result1.w + 1)
            } else {
                result1.w = Math.abs(result1.w + 1) % count
            }
            result1.b = count - result1.w
            result1.rate = rate1
            curr.push(result1)

            let result2 = Object.assign({}, item)
            let rate2 = result2.w / count * item.rate

            result2.w = Math.abs(result2.w - 1) % count
            result2.b = count - result2.w
            result2.rate = rate2
            curr.push(result2)
        })

        array = curr
        step--
    }
    return Number(array.filter(item => item.rate).reduce((curr, next) => curr + next.w / count * next.rate, 0).toFixed(2))
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(boxProbability('bbw', 3), 0.48, "First");
    assert.equal(boxProbability('wwb', 3), 0.52, "Second");
    assert.equal(boxProbability('www', 3), 0.56, "Third");
    assert.equal(boxProbability('bbbb', 1), 0, "Fifth");
    assert.equal(boxProbability('wwbb', 4), 0.5, "Sixth");
    assert.equal(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
function boxProbability(marbles, step) {
    marbles = marbles.split('')
    // 1/3 -> (2/3)2/3 or (1/3)0
    let start = {
        w: 1,
        b: 2
    }
    let count = marbles.length
    let array = [{
        marbles: start,
        rate: 1
    }]

    let curr = [
        {
            marbles: start,
            rate: 1
        }
    ]

    while (step > 0) {
        let _curr =[]
        curr.forEach(item => {
            let result1 = Object.assign({}, item.marbles)
            result1.w = Math.abs(result1.w + 1)
            result1.b = count - result1.w

            _curr.push({
                marbles: result1,
                rate: result1.w / count
            })

            let result2 = Object.assign({}, item.marbles)
            result2.w = Math.abs(result2.w - 1)
            result2.b = count - result2.w

            _curr.push({
                marbles: result2,
                rate: result2.w / count
            })
        })

        curr = _curr
        console.log(curr)
        // array = array.concat(curr)
        step--
    }
    // console.log(array)

    return 0.5
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
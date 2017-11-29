function numbersFactory(number) {
    let array = []
    let flag = false
    foo(number)
    array.sort()
    return !flag ? 0 : Number(array.join(''));

    function foo(number) {
        for (let i = 9; i > 1; i--) {
            if (number % i === 0) {
                let rest = number / i
                array.push(i)
                console.log(rest)
                if (rest < 10) {
                    flag = true
                }
                foo(rest)
                return
            }
        }
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numbersFactory(20), 45);
    assert.equal(numbersFactory(21), 37);
    assert.equal(numbersFactory(17), 0);
    assert.equal(numbersFactory(33), 0);
    assert.equal(numbersFactory(3125), 55555);
    assert.equal(numbersFactory(9973), 0);
    assert.equal(numbersFactory(3275), 0);
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

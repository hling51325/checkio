function createIntervals(data) {
    data.sort((a, b) => a - b)
    let array = []
    data.forEach((num, index) => {
        if (!array.length) {
            array.push([num, num])
        }
        if (index > 0) {
            let a = array[array.length - 1]
            if (data[index - 1] + 1 === data[index]) {
                a[1] = data[index]
            } else {
                array.push([num, num])
            }
        }
    })
    return array;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(createIntervals([1, 2, 3, 4, 5, 7, 8, 12]), [[1, 5], [7, 8], [12, 12]], "First")
    assert.deepEqual(createIntervals([1, 2, 3, 6, 7, 8, 4, 5]), [[1, 8]], "Second")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

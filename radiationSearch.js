function radiationSearch(data) {
    let count
    let results = []
    data = data.map(item => item.map(n => ({n, read: false})))
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (!data[i][j].read) {
                count = 0
                let n = data[i][j].n
                job(n, i, j)
                results.push({
                    n,
                    count
                })
            }
        }
    }

    results.sort((a, b) => b.count - a.count)
    return [results[0].count, results[0].n]

    function job(number, i, j) {
        let array = []
        if (i - 1 >= 0) array.push([i - 1, j])
        if (i + 1 <= data.length - 1) array.push([i + 1, j])
        if (j - 1 >= 0) array.push([i, j - 1])
        if (j + 1 <= data[i].length - 1) array.push([i, j + 1])

        array.forEach(next => {
            let item = data[next[0]][next[1]]
            if (!item.read && item.n === number) {
                count++
                item.read = true
                job(number, next[0], next[1])
            }
        })
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(radiationSearch([
        [1, 2, 3, 4, 5],
        [1, 1, 1, 2, 3],
        [1, 1, 1, 2, 2],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
    ]), [14, 1], "14 of 1");
    assert.deepEqual(radiationSearch([
        [2, 1, 2, 2, 2, 4],
        [2, 5, 2, 2, 2, 2],
        [2, 5, 4, 2, 2, 2],
        [2, 5, 2, 2, 4, 2],
        [2, 4, 2, 2, 2, 2],
        [2, 2, 4, 4, 2, 2]
    ]), [19, 2], "19 of 2");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

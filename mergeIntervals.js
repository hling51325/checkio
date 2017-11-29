function mergeIntervals(intervals) {
    return intervals.reduce((curr, next) => {
        let item = curr[curr.length - 1]

        if (next[0] <= item[1] || next[0] === item[1] + 1) {
            item[0] = next[0] < item[0] ? next[0] : item[0]
            item[1] = next[1] < item[1] ? item[1] : next[1]
        } else {
            curr.push(next)
        }
        return curr
    }, [intervals[0]]).filter(item => item)
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(mergeIntervals([[1, 4], [2, 6], [8, 10], [12, 19]]), [[1, 6], [8, 10], [12, 19]], "First")
    assert.deepEqual(mergeIntervals([[1, 12], [2, 3], [4, 7]]), [[1, 12]], "Second")
    assert.deepEqual(mergeIntervals([[1, 5], [6, 10], [10, 15], [17, 20]]), [[1, 15], [17, 20]], "Third")
    console.log("Done! Go ahead and Check IT");
}

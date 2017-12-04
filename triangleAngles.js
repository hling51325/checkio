function triangleAngles(a, b, c) {
    let array = [a, b, c]
    array.sort((a, b) => a - b)
    if (a + b <= c) return [0, 0, 0]
    let angles = [
        getAngle(a, b, c),
        getAngle(a, c, b),
        getAngle(b, c, a),
    ]
    angles.sort((a, b) => a - b)
    return angles

    function getAngle(a, b, c) {
        return Math.round(Math.acos((a * a + b * b - c * c) / (2 * a * b)) / (2 * Math.PI ) * 360)
    }
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

function recallPassword(grille, password) {
    grille = grille.map(array => array.split('').map(x => x === 'X' ? 1 : 0))
    password = password.map(array => array.split(''))
    let i = 1
    let str = recall(grille, '')
    while (i < 4) {
        grille = transform(grille)
        str = recall(grille, str)
        i++
    }
    return str

    function transform(matrix) {
        return matrix.map((x, i) => x.map((_, _i) => matrix[matrix.length - 1 - _i][i]))
    }

    function recall(matrix, str) {
        matrix.forEach((a, i) => {
            a.forEach((b, j) => {
                if (b) str += password[i][j]
            })
        })
        return str
    }

    const rotate90 = matrix => matrix.map((_, i) => matrix.map(e=> e[i]).reverse());
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(recallPassword(['X...',
            '..X.',
            'X..X',
            '....'],
        ['itdf',
            'gdce',
            'aton',
            'qrdi']), 'icantforgetiddqd', "First Example");
    assert.equal(recallPassword(['....',
            'X..X',
            '.X..',
            '...X'],
        ['xhwc',
            'rsqx',
            'xqzz',
            'fyzr']), 'rxqrwsfzxqxzhczy', "Second Example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

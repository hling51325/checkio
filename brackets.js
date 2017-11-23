function brackets(expression) {
    let seq = []
    let check = char => seq[seq.length - 1] === char

    for (let i = 0; i < expression.length; i++) {
        let char = expression.charAt(i)
        if (char === '{') {
            seq.push(char)
        } else if (char === '}') {
            if (!check('{')) {
                return false
            }
            seq.pop()
        } else if (char === '[') {
            seq.push(char)
        } else if (char === ']') {
            if (!check('[')) {
                return false
            }
            seq.pop()
        } else if (char === '(') {
            seq.push(char)
        } else if (char === ')') {
            if (!check('(')) {
                return false
            }
            seq.pop()
        }
    }
    return !seq.length;
}


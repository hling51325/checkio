function hammingDistance(n, m) {
    let a = n.toString(2)
    let b = m.toString(2)
    let diff = a.length - b.length

    let fill = (str, length) => {
        for (let i = 0; i < Math.abs(length); i++) {
            str = '0' + str
        }
        return str
    }

    if (diff < 0) {
        a = fill(a, diff)
    } else if (diff > 0) {
        b = fill(b, diff)
    }
    let result = 0
    for (let i = 0; i < a.length; i++) {
        result = a.charAt(i) !== b.charAt(i) ? result + 1 : result;
    }
    return result
}

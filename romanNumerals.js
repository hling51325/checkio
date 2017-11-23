function romanNumerals(number) {

    let obj = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': '400',
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    }

    let str = ''

    for (let i in obj) {
        if (number < obj[i]) {
            continue
        }
        while (number >= obj[i]) {
            number -= obj[i]
            str += i
        }
    }
    return str
}

assert.equal(romanNumerals(6), 'VI', "First");
assert.equal(romanNumerals(76), 'LXXVI', "Second");
assert.equal(romanNumerals(499), 'CDXCIX', "Third");
assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
console.log(romanNumerals(579))
console.log("Done! Go Check!");
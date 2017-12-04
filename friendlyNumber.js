"use strict";

function friendlyNumber(number, options) {
    if (!options) {
        options = {};
    }
    if (!options.base) {
        options.base = 1000;
    }
    if (!options.decimals) {
        options.decimals = 0;
    }
    if (!options.suffix) {
        options.suffix = '';
    }
    if (!options.powers) {
        options.powers = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    }

    let i = 0
    while (Math.abs(number) >= options.base && i < options.powers.length - 1) {
        number = number / options.base
        i++
    }

    console.log(i)
    console.log(number)

    if (options.decimals) {
        number = number.toFixed(options.decimals)
    } else {
        number = number < 0 ? -Math.floor(-number) : Math.floor(number)
    }
    number += options.powers[i]
    if (options.suffix) {
        number += options.suffix
    }
    return String(number);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(friendlyNumber(102), '102', "102");
    assert.equal(friendlyNumber(10240), '10k', "10k");
    assert.equal(friendlyNumber(12341234, {decimals: 1}), '12.3M', "12.3M");
    assert.equal(friendlyNumber(12461, {decimals: 1}), '12.5k', "12.5k");
    assert.equal(friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}), '976MiB', "976MiB");
    assert.equal(friendlyNumber(-150, {"base": 100, "powers": ["", "d", "D"]}), "-1d")
    // assert.equal(friendlyNumber(255000000000, {"powers": ["", "k", "M"]}), "255000M")
    assert.equal(friendlyNumber(1e+24, {}), "1Y")

    console.log("Tests and earn cool rewards!");
}

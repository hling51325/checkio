"use strict";

function stripedWords(text) {
    text = text.toLowerCase()
    let vowel = 'aeiouy'
    let array = text.split(/[^a-z0-9]/).filter(t => t && !t.split('').find(e=> /[0-9]/.test(e)))
    let count = 0
    array.forEach(word => {
        if (word.length < 2) return
        let char = word.split('')
        let firstVowel = false
        if (vowel.includes(char[0])) {
            firstVowel = true
        }
        let isStriped = true
        for (let i = 0; i < char.length; i++) {
            if (i % 2 === 0) {
                if (firstVowel) {
                    if (!vowel.includes(char[i])) {
                        isStriped = false
                    } else if (char[i + 1] && vowel.includes(char[i + 1])) {
                        isStriped = false
                    }
                } else {
                    if (vowel.includes(char[i])) {
                        isStriped = false
                    } else if (char[i + 1] && !vowel.includes(char[i + 1])) {
                        isStriped = false
                    }
                }
            }
        }
        if (isStriped) {
            count++
        }
    })
    return count
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(stripedWords("My name is ..."), 3, "All words are striped");
    assert.equal(stripedWords("Hello world"), 0, "No one");
    assert.equal(stripedWords("A quantity of striped words."), 1, "Only of");
    assert.equal(stripedWords("Dog,cat,mouse,bird.Human."), 3, "Dog, cat and human");
    assert.equal(stripedWords("1st 2a ab3er root rate"), 1);
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

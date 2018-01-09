function isStressful(subj) {
    let result = false
    if (subj.substring(subj.length - 3) === '!!!') {
        return true
    }
    if (!/[a-z]/g.test(subj)) {
        return true
    }
    subj.split(' ').forEach(job)

    function job(word) {
        let red = [/h.*e.*l.*p.*/i, /a.*s.*a.*p.*/i, /u.*r.*g.*e.*n.*t.*/i]
        red.forEach(match)

        function match(reg) {
            if (reg.test(word)) {
                result = true
            }
        }
    }

    return result
}

const assert = require('assert');

if (!global.is_checking) {
    // assert.equal(isStressful("Hi"), false, "First")
    // assert.equal(isStressful("I neeed HELP"), true, "Second")
    assert.equal(isStressful("something is gona happen"), false)
    assert.equal(isStressful("HI HOW ARE YOU?"), true)
    assert.equal(isStressful("where are you?!!!!"), true)
    console.log("Done! Go Check it!");
}

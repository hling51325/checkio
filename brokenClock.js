function brokenClock(startingTime, wrongTime, errorDescription) {
    let units = {
        second: 1,
        minute: 60,
        hour: 3600
    }
    errorDescription = errorDescription.split(' ')
    let oneunit = errorDescription[1]
    let one = errorDescription[0]
    let twounit = errorDescription[4]
    let two = errorDescription[3];

    Object.keys(units).forEach(unit => {
        if (oneunit.includes(unit)) {
            one = units[unit] * one
        }
        if (twounit.includes(unit)) {
            two = units[unit] * two
        }
    })

    let end = Math.floor(((one / two) * Number(parseTime(startingTime)) + Number(parseTime(wrongTime))) / (1 + one / two))
    // (end - start)/ two * one  + end  = error
    return strifyime(end)

    function parseTime(time) {
        let [hour, minute, second] = time.split(':')
        return Number(hour * units.hour) + Number(minute * units.minute) + Number(second)
    }

    function strifyime(total) {
        let hour = Math.floor(total / 3600)
        let rest = total % 3600
        let minute = Math.floor(rest / 60)
        let second = rest % 60
        return [hour, minute, second]
            .map(time => {
                time = time.toString()
                if (time.length < 2) {
                    time = '0' + time
                }
                return time
            })
            .join(':')
    }
}

assert.equal(brokenClock('00:00:00', '00:00:15', '+5 seconds at 10 seconds'), '00:00:10', "First example");
assert.equal(brokenClock('06:10:00', '06:10:15', '-5 seconds at 10 seconds'), '06:10:30', "Second example");
assert.equal(brokenClock('13:00:00', '14:01:00', '+1 second at 1 minute'), '14:00:00', "Third example");
assert.equal(brokenClock('01:05:05', '04:05:05', '-1 hour at 2 hours'), '07:05:05', "Fourth example");
assert.equal(brokenClock('00:00:00', '00:00:30', '+2 seconds at 6 seconds'), '00:00:22', "Fifth example");
console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
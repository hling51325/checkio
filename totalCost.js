"use strict";

function totalCost(calls) {
    let totalCost = 0
    let days = {}
    calls.forEach(call => {
        let arr = call.split(' ')
        let day = arr[0]
        let time = Number(arr[2])
        let coin = 0
        let costTime = days[day] || 0
        if (costTime >= 6000) {
            coin = Math.ceil(time / 60) * 2
        } else {
            if (costTime + time > 6000) {
                let rest = costTime + time - 6000
                let limitTime = 6000 - costTime
                coin = Math.ceil(rest / 60) * 2 + Math.ceil(limitTime / 60)
            } else {
                coin = Math.ceil(time / 60)
            }
        }
        days[day] = (days[day] || 0) + time
        console.log(coin)
        totalCost += coin
    })
    return totalCost
}

var assert = require('assert');

if (!global.is_checking) {
    // assert.equal(totalCost(["2014-01-01 01:12:13 181",
    //     "2014-01-02 20:11:10 600",
    //     "2014-01-03 01:12:13 6009",
    //     "2014-01-03 12:13:55 200"]), 124, "Base example");
    // assert.equal(totalCost(["2014-02-05 01:00:00 1",
    //     "2014-02-05 02:00:00 1",
    //     "2014-02-05 03:00:00 1",
    //     "2014-02-05 04:00:00 1"]), 4, "Short calls but money...");
    // assert.equal(totalCost(["2014-02-05 01:00:00 60",
    //     "2014-02-05 02:00:00 60",
    //     "2014-02-05 03:00:00 60",
    //     "2014-02-05 04:00:00 6000"]), 106, "Precise calls");
    assert.equal(totalCost(["2054-07-17 10:21:08 1958",
        "2054-07-17 16:17:18 1388",
        "2054-07-18 00:30:57 729",
        "2054-07-18 03:55:30 4970",
        "2054-07-18 23:10:05 5397",
        "2054-07-19 16:37:31 5894",
        "2054-07-20 11:21:10 2537",
        "2054-07-20 17:09:49 4398",
        "2054-07-21 04:17:34 2839",
        "2054-07-21 06:23:25 6229",
        "2054-07-21 10:21:01 4540",
        "2054-07-21 22:10:46 5599",
        "2054-07-22 11:26:43 6199",
        "2054-07-23 02:02:52 818",
        "2054-07-23 14:30:19 3244",
        "2054-07-23 20:46:25 380",
        "2054-07-24 08:41:40 4774",
        "2054-07-24 23:33:14 5206",
        "2054-07-25 08:47:44 3848",
        "2054-07-25 11:32:40 694",
        "2054-07-25 18:28:25 5974",
        "2054-07-26 09:24:52 4550",
        "2054-07-26 13:06:07 6637",
        "2054-07-27 09:03:40 177",
        "2054-07-27 13:11:42 5736",
        "2054-07-27 15:53:26 5698",
        "2054-07-28 09:51:43 1996",
        "2054-07-28 14:03:30 432"]), 2382)
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
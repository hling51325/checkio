function countingTiles(radius) {
    let whole = 0
    let part = 0

    let x = 0
    while (x < radius + 1) {
        let y = 0
        while (y < radius + 1) {
            let p1 = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
            let p2 = Math.sqrt(Math.pow(x + 1, 2) + Math.pow(y + 1, 2))
            if (p1 < radius && p2 < radius) {
                whole++
            } else if (p1 < radius && p2 > radius) {
                part++
            }
            y++
        }
        x++
    }
    return [whole * 4, part * 4]
}

function capture(data) {
    let vertexes = {}
    init()
    return job(0)

    function init() {
        for (let i = 0; i < data.length; i++) {
            vertexes[i] = {}
            let edges = []
            for (let j = 0; j < data[i].length; j++) {
                if (i !== j && data[i][j]) {
                    edges.push({
                        time: data[j][j],
                        from: i,
                        to: j
                    })
                }
            }
            vertexes[i].edges = edges
            if (i === 0) {
                vertexes[i].weight = 0
            }
        }
    }

    function job(v) {
        vertexes[v].edges.forEach(edge => {
            if (vertexes[edge.to].weight !== undefined) {
                vertexes[edge.to].weight = vertexes[edge.to].weight > edge.time + vertexes[v].weight ?
                    edge.time + vertexes[v].weight :
                    vertexes[edge.to].weight
            } else {
                vertexes[edge.to].weight = edge.time + vertexes[v].weight
            }
        })
        vertexes[v].out = true
        vertexes[v].edges.forEach(edge => {
            if (!vertexes[edge.to].out) {
                job(edge.to)
            }
        })

        let isFinished = true
        for (let v in vertexes) {
            if (vertexes[v].weight === undefined) {
                isFinished = false
            }
        }

        if (isFinished) {
            let max = 0
            for (let v in vertexes) {
                max = vertexes[v].weight > max ? vertexes[v].weight : max
            }
            return max
        }
    }
}

assert.equal(capture([[0, 1, 0, 1, 0, 1],
    [1, 8, 1, 0, 0, 0],
    [0, 1, 2, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 3, 1],
    [1, 0, 1, 0, 1, 2]]), 8, "Base example");
assert.equal(capture([[0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0],
    [0, 1, 2, 0, 0, 1],
    [1, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 3, 1],
    [1, 0, 1, 0, 1, 2]]), 4, "Low security");
assert.equal(capture([[0, 1, 1],
    [1, 9, 1],
    [1, 1, 9]]), 9, "Small");
assert.equal(capture([
    [0, 0, 0, 0, 1, 0, 0],
    [0, 4, 0, 1, 1, 0, 1],
    [0, 0, 1, 0, 0, 1, 1],
    [0, 1, 0, 3, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 5, 1],
    [0, 1, 1, 1, 0, 1, 2]
]), '12')
assert.equal(capture(
    [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 3, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 4, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 5, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 6, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 7, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 8, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 9]
    ]), "45")

assert.equal(capture([
    [0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 6, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 9, 1, 0, 1, 0, 0, 0],
    [1, 1, 1, 7, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 2, 1, 1, 1, 0],
    [0, 0, 1, 0, 1, 8, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 9, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 7, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 9]
]), '22')

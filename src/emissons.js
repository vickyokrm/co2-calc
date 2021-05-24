const fs = require("fs")
const path = require("path")
const compute = (distance, transportmethod) => {
    const file = fs.readFileSync(path.resolve(__dirname, '..', 'config/transportModes.json'))
    const mode = JSON.parse(file)
    return mode && mode.hasOwnProperty(transportmethod) && mode[transportmethod] * distance
}

module.exports = {
    compute
}
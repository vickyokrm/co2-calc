const fs = require("fs")
const path = require("path")
const file = fs.readFileSync(path.resolve(__dirname, '..', 'config/transportModes.json'))
const allowedTransportMethods = JSON.parse(file.toString())

const raiseException = (msg) => {
    throw new Error(msg);
}

const userInput = (start, end, transportationmethod) => {
    if (start) {
        if (typeof (start) !== "string" || start.length === 0) {
            raiseException(`Empty or invalid start location: "${start}"`);
        }
    } else {
        raiseException('No start location found, use option --start')
    }

    if (end) {
        if (typeof (end) !== "string" || end.length === 0) {
            raiseException(`Empty or invalid end location: "${end}"`);
        }
    } else {
        raiseException('No destionation found, use option --end')
    }

    if (transportationmethod) {
        if (typeof (transportationmethod) !== "string" || transportationmethod.length === 0) {
            raiseException(`Empty or invalid transportation method: "${transportationmethod}" `);
        }
        if(!allowedTransportMethods.hasOwnProperty(transportationmethod)) {
            raiseException(`The given transport method is invalid: "${transportationmethod}" `);
        }
    } else {
        raiseException('No transportation method found, use option --transportationmethod')
    }
}

module.exports = {
    userInput
}
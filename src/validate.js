const fs = require("fs")
const path = require("path")
const file = fs.readFileSync(path.resolve(__dirname, '..', 'config/transportModes.json'))
const allowedTransportMethods = JSON.parse(file.toString())

const raiseException = (msg) => {
    throw new Error(msg);
}

const userInput = (args) => {
    if (args.hasOwnProperty('start')) {
        if (typeof (args.start) !== "string" || args.start.length === 0) {
            raiseException(`Empty or invalid start location: "${args.start}"`);
        }
    } else {
        raiseException('No start location found, use option --start')
    }

    if (args.hasOwnProperty('end')) {
        if (typeof (args.end) !== "string" || args.end.length === 0) {
            raiseException(`Empty or invalid end location: "${args.end}"`);
        }
    } else {
        raiseException('No destionation found, use option --end')
    }

    if (args.hasOwnProperty('transportationmethod')) {
        if (typeof (args.transportationmethod) !== "string" || args.transportationmethod.length === 0) {
            raiseException(`Empty or invalid transportation method: "${args.transportationmethod}" `);
        }
        if(!allowedTransportMethods.hasOwnProperty(args.transportationmethod)) {
            raiseException(`The given transport method is invalid: "${args.transportationmethod}" `);
        }
    } else {
        raiseException('No transportation method found, use option --transportationmethod')
    }
}

module.exports = {
    userInput
}
const dotenv = require('dotenv').config()
const args = require('minimist')(process.argv.slice(2))
const emissons =  require('./src/emissons')
const distance =  require('./src/distance')

const raiseException = (msg) => {
    throw new Error(msg);
}

const validateUserInput = (args) => {
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
    } else {
        raiseException('No transportation method found, use option --transportationmethod')
    }
}


async function startApplication() {
    try {
        validateUserInput(args);
        const distanceBetweenCities = await distance.find(args.start, args.end);
        const co2emisson = emissons.compute(distanceBetweenCities, args.transportationmethod);
        console.log(`Your trip caused approx. ${Math.ceil(co2emisson)} of co2.`)
    } catch (error) {
        console.error(error)
    }
}


startApplication();

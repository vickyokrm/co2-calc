const dotenv = require('dotenv').config()
const args = require('minimist')(process.argv.slice(2))
const emissons =  require('./src/emissons')
const distance =  require('./src/distance')
const validate =  require('./src/validate')
const util =  require('./util/util')

async function startApplication() {
    try {
        validate.userInput(args);
        const distanceBetweenCities = await distance.find(args.start, args.end);
        const co2= emissons.compute(distanceBetweenCities, args.transportationmethod);
        console.log(`Your trip caused approx. ${util.convertToKg(co2)} kg of co2.`)
    } catch (error) {
        console.error(error)
    }
}

startApplication();

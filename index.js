const dotenv = require('dotenv').config()
const args = require('minimist')(process.argv.slice(2))
const emissons =  require('./src/emissons')
const distance =  require('./src/distance')
const validate =  require('./src/validate')

async function startApplication() {
    try {
        validate.userInput(args);
        const distanceBetweenCities = await distance.find(args.start, args.end);
        const co2emisson = emissons.compute(distanceBetweenCities, args.transportationmethod);
        console.log(`Your trip caused approx. ${co2emisson} kg of co2.`)
    } catch (error) {
        console.error(error)
    }
}

startApplication();

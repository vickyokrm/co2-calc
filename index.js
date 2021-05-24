const dotenv = require('dotenv').config()
const args = require('minimist')(process.argv.slice(2))
const emissons = require('./src/emissons')
const distance = require('./src/distance')
const validate = require('./src/validate')
const util = require('./util/util')

async function startApplication () {
  ({ start, end, transportationmethod } = args)
  try {
    validate.checkAll(start, end, transportationmethod)
    const distanceBetweenCities = await distance.find(start, end)
    const co2 = emissons.compute(distanceBetweenCities, transportationmethod)
    console.log(`Your trip caused approx. ${util.convertToKg(co2)} kg of co2.`)
  } catch (error) {
    console.error(error)
  }
}

startApplication()

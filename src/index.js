/* const express = require('express')

const app = express();

app.get('/', (req, res)=> {
    res.send('Hej World');
})

app.listen('1010', ()=> {
    console.log('App running on port 8080...')
} )

*/
const dotenv = require('dotenv').config()
const geoService = require('./api/geoService')
const args = require('minimist')(process.argv.slice(2))

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


const calculateEmisson = (distance, transportmethod) => {
    let emisson;
    switch (transportmethod) {
        case "small-diesel-car":
            emisson = distance * 142
            break;
        case "small-petrol-car":
            emisson = distance * 154
            break;
        case "small-plugin-hybrid-car":
            emisson = distance * 73
            break;
        case "small-electric-car":
            emisson = distance * 50
            break;
        case "medium-diesel-car":
            emisson = distance * 171
            break;
        case "medium-petrol-car":
            emisson = distance * 192
            break;
        case "medium-plugin-hybrid-car":
            emisson = distance * 110
            break;
        case "medium-electric-car":
            emisson = distance * 58
            break;
        case "large-diesel-car":
            emisson = distance * 209
            break;
        case "large-petrol-car":
            emisson = distance * 282
            break;
        case "large-plugin-hybrid-car":
            emisson = distance * 126
            break;
        case "large-electric-car":
            emisson = distance * 73
            break;
        case "bus":
            emisson = distance * 27
            break;
        case "train":
            emisson = distance * 6
            break;
        default:
            emisson = 0
            break;
    }
    return emisson
}

const findDistances = async (args) => {
    ({start, end} = args)
    const startLocation = await geoService.searchCity(start);
    const destination = await geoService.searchCity(end);

    const startCoOrdinates = startLocation.features.map(feature => feature.geometry.coordinates)
    const endCoOrdinates = destination.features.map(feature => feature.geometry.coordinates)

    if (startCoOrdinates.length && endCoOrdinates.length) {
        return distanceBetweenCities = await geoService.getDistance([].concat(startCoOrdinates, endCoOrdinates))
    }

}

async function startApplication() {
    try {
        validateUserInput(args);
        const distance = await findDistances(args);
        const co2emisson = calculateEmisson(distance, args.transportationmethod);
        console.log(`Your trip caused approx. ${Math.ceil(co2emisson)} of co2.`)
    } catch (error) {
        console.error(error)
    }
}


startApplication();

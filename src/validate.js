const fs = require('fs')
const path = require('path')
const file = fs.readFileSync(path.resolve(__dirname, '..', 'config/transportModes.json'))
const allowedTransportMethods = JSON.parse(file.toString())

const containsSymbol = /\p{P}/u

const checkStart = (start) => {
  if (start) {
    if (typeof (start) !== 'string' || start.length === 0) {
      throw `Empty or invalid start location: "${start}"`
    }
    if (start.match(containsSymbol)) {
      throw 'Start location is invalid'
    }
  } else {
    throw 'No start location found, use option --start'
  }
}

const checkDestination = (end) => {
  if (end) {
    if (typeof (end) !== 'string' || end.length === 0) {
      throw `Empty or invalid end location: "${end}"`
    }

    if (end.match(containsSymbol)) {
      throw 'Destination is invalid'
    }
  } else {
    throw 'No destionation found, use option --end'
  }
}

const checkTransMethod = (transportationmethod) => {
  if (transportationmethod) {
    if (typeof (transportationmethod) !== 'string' || transportationmethod.length === 0) {
      throw `Empty or invalid transportation method: "${transportationmethod}"`
    }
    if (!allowedTransportMethods.hasOwnProperty(transportationmethod)) {
      throw `The given transport method is invalid: "${transportationmethod}"`
    }
  } else {
    throw 'No transportation method found, use option --transportationmethod'
  }
}
const checkAll = (start, end, transportationmethod) => {
  checkStart(start)
  checkDestination(end)
  checkTransMethod(transportationmethod)
}

module.exports = {
  checkAll,
  checkStart,
  checkDestination,
  checkTransMethod
}

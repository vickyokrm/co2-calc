const geoService = require('../api/geoService')
const find = async (start, end) => {
    const startLocation = await geoService.searchCity(start);
    const destination = await geoService.searchCity(end);

    const startCoOrdinates = startLocation.features.map(feature => feature.geometry.coordinates)
    const endCoOrdinates = destination.features.map(feature => feature.geometry.coordinates)

    if (startCoOrdinates.length && endCoOrdinates.length) {
        return distanceBetweenCities = await geoService.getDistance([].concat(startCoOrdinates, endCoOrdinates))
    }

}

module.exports = {
    find
}

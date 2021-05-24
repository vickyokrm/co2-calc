const fetch = require('node-fetch')
const querystring = require('querystring')

const url = 'https://api.openrouteservice.org'
const apiKey = process.env.ORS_TOKEN
const searchCity = async (text, layers = 'locality') => {
  const endPoint = url + '/geocode/search?' + querystring.stringify({ api_key: apiKey, text, size: 1 })
  const response = await fetch(endPoint)
  if (!response.ok) {
    throw new Error(`${response.statusText} Reading city information failed`)
  }
  return await response.json()
}

const getDistance = async (locations) => {
  const endPoint = url + '/v2/matrix/driving-car'
  const headers = {
    Authorization: apiKey,
    'content-type': 'application/json'
  }

  const response = await fetch(endPoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      locations,
      metrics: ['distance'],
      units: 'km'
    })
  })
  if (!response.ok) {
    throw new Error(`${response.statusText} Reading distances matrix between the locations failed`)
  }

  const result = await response.json()
  return result.distances[0][1]
}

module.exports = {
  searchCity,
  getDistance
}

const validate = require('../src/validate')
const expect = require('chai').expect
describe('Check input values', function () {
  describe('validate start', function () {
    it('checks for the numeric value of starting position', function () {
      try {
        validate.checkStart(12)
      } catch (error) {
        expect(error).to.equals(`Empty or invalid start location: "${12}"`)
      }
    })

    it('checks for the emtpy value of starting position', function () {
      try {
        validate.checkStart()
      } catch (error) {
        expect(error).to.equals('No start location found, use option --start')
      }
    })

    it('checks for the characters', function () {
      try {
        validate.checkStart('§)&/&%/%')
      } catch (error) {
        expect(error).to.equals('Start location is invalid')
      }
    })
  })
  describe('validate end', function () {
    it('checks for the numeric value for destination', function () {
      try {
        validate.checkDestination(12)
      } catch (error) {
        expect(error).to.equals(`Empty or invalid end location: "${12}"`)
      }
    })

    it('checks for the emtpy value for destination', function () {
      try {
        validate.checkDestination()
      } catch (error) {
        expect(error).to.equals('No destionation found, use option --end')
      }
    })

    it('checks for the special characters', function () {
      try {
        validate.checkDestination('§)&/&%/%')
      } catch (error) {
        expect(error).to.equals('Destination is invalid')
      }
    })
  })

  describe('validate transport method', function () {
    it('checks for the numeric value for destination', function () {
      try {
        validate.checkTransMethod('car')
      } catch (error) {
        expect(error).to.equals(`The given transport method is invalid: "${'car'}"`)
      }
    })

    it('checks for the emtpy value for destination', function () {
      try {
        validate.checkTransMethod()
      } catch (error) {
        expect(error).to.equals('No transportation method found, use option --transportationmethod')
      }
    })
  })
})

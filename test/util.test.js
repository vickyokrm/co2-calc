const emissons = require('../util/util')
const expect = require('chai').expect;

describe("Convert to Kilo", function () {
    it("should convert the value to kilo", function() {
        const kilo = emissons.convertToKg(1000)
        expect(kilo).to.equals(1)
    })

    it("should convert the value to kilo", function() {
        const kilo = emissons.convertToKg(0)
        expect(kilo).to.equals(0)
    })
})
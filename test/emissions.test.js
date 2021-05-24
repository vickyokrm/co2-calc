const emissons = require('../src/emissons')
const expect = require('chai').expect
describe('Calculate emissions', function () {
  describe('Compute emissiong for small cars', function () {
    it('should check emission for small-diesel-car', function () {
      const co2 = emissons.compute(1, 'small-diesel-car')
      expect(co2).to.equals(142)
    })

    it('should check emission for small-petrol-car', function () {
      const co2 = emissons.compute(1, 'small-petrol-car')
      expect(co2).to.equals(154)
    })

    it('should check emission for small-plugin-hybrid-car', function () {
      const co2 = emissons.compute(1, 'small-plugin-hybrid-car')
      expect(co2).to.equals(73)
    })

    it('should check emission for small-electric-car', function () {
      const co2 = emissons.compute(1, 'small-electric-car')
      expect(co2).to.equals(50)
    })
  })

  describe('Compute emissiong for medium cars', function () {
    it('should check emission for medium-diesel-car', function () {
      const co2 = emissons.compute(1, 'medium-diesel-car')
      expect(co2).to.equals(171)
    })

    it('should check emission for medium-petrol-car', function () {
      const co2 = emissons.compute(1, 'medium-petrol-car')
      expect(co2).to.equals(192)
    })

    it('should check emission for medium-plugin-hybrid-car', function () {
      const co2 = emissons.compute(1, 'medium-plugin-hybrid-car')
      expect(co2).to.equals(110)
    })

    it('should check emission for medium-electric-car', function () {
      const co2 = emissons.compute(1, 'medium-electric-car')
      expect(co2).to.equals(58)
    })
  })

  describe('Compute emissiong for large cars', function () {
    it('should check emission for large-diesel-car', function () {
      const co2 = emissons.compute(1, 'large-diesel-car')
      expect(co2).to.equals(209)
    })

    it('should check emission for large-petrol-car', function () {
      const co2 = emissons.compute(1, 'large-petrol-car')
      expect(co2).to.equals(282)
    })

    it('should check emission for large-plugin-hybrid-car', function () {
      const co2 = emissons.compute(1, 'large-plugin-hybrid-car')
      expect(co2).to.equals(126)
    })
  })

  describe('Compute emissiong for bus', function () {
    it('should check emission for bus', function () {
      const co2 = emissons.compute(1, 'bus')
      expect(co2).to.equals(27)
    })
  })

  describe('Compute emissiong for train', function () {
    it('should check emission for train', function () {
      const co2 = emissons.compute(1, 'train')
      expect(co2).to.equals(6)
    })
  })
})

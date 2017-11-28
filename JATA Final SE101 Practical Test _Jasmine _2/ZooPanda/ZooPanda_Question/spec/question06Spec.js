/* global describe beforeEach  it expect Panda PandaSponsor */
describe('Question Six', () => {
  describe('PandaSponsor.hasTwoPandas function', () => {
    let aPandaSponsor, aPanda
    beforeEach(() => {
      aPandaSponsor = new PandaSponsor()
      aPanda = new Panda()
    })

    it('should exist', () => {
      expect(aPandaSponsor.hasTwoPandas).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof aPandaSponsor.hasTwoPandas()).toBe('boolean')
    })

    it('should return true if the number of Panda that PandaSponsor has is equal two.', () => {
      aPandaSponsor = new PandaSponsor('tao', null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      expect(aPandaSponsor.hasTwoPandas()).toBe(true)
    })

    it('should return false if the number of Panda that PandaSponsor has is less than two.', () => {
      aPandaSponsor = new PandaSponsor('tao', null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      expect(aPandaSponsor.hasTwoPandas()).toBe(false)
    })

    it('should return false if the number of Panda that PandaSponsor owns is more than two.', () => {
      aPandaSponsor = new PandaSponsor('tao', null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      aPanda = aPandaSponsor.addPanda(null, null, null, null)
      expect(aPandaSponsor.hasTwoPandas()).toBe(false)
    })
  })
})

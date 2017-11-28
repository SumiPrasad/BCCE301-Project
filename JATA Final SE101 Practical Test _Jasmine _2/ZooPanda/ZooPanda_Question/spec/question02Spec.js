/* global describe beforeEach  it expect Controller */
describe('Question Two', () => {
  describe('adding the four PandaSponsor', () => {
    let theZoo
    beforeEach(() => {
      theZoo = Controller.setup()
    })

    it('should have added 4 PandaSponsors', () => {
      expect(theZoo.allMyPandaSponsors.length).toBe(4)
    })

    it('should have correctly set details for each PandaSponsor', () => {
      let aPandaSponsor
      theZoo.sortPandaSponsors()

      aPandaSponsor = theZoo.allMyPandaSponsors[0]
      expect(aPandaSponsor).toBeDefined()
      expect(aPandaSponsor.id).toBe('01')
      expect(aPandaSponsor.firstName).toBe('June')
      expect(aPandaSponsor.lastName).toBe('Gardiner')
      expect(aPandaSponsor.gender).toBe('F')

      aPandaSponsor = theZoo.allMyPandaSponsors[1]
      expect(aPandaSponsor).toBeDefined()
      expect(aPandaSponsor.id).toBe('02')
      expect(aPandaSponsor.firstName).toBe('Maurice')
      expect(aPandaSponsor.lastName).toBe('Cook')
      expect(aPandaSponsor.gender).toBe('M')

      aPandaSponsor = theZoo.allMyPandaSponsors[2]
      expect(aPandaSponsor).toBeDefined()
      expect(aPandaSponsor.id).toBe('03')
      expect(aPandaSponsor.firstName).toBe('Meryl')
      expect(aPandaSponsor.lastName).toBe('Henry')
      expect(aPandaSponsor.gender).toBe('F')

      aPandaSponsor = theZoo.allMyPandaSponsors[3]
      expect(aPandaSponsor).toBeDefined()
      expect(aPandaSponsor.id).toBe('04')
      expect(aPandaSponsor.firstName).toBe('William')
      expect(aPandaSponsor.lastName).toBe('Cambell')
      expect(aPandaSponsor.gender).toBe('M')
    })
  })
})

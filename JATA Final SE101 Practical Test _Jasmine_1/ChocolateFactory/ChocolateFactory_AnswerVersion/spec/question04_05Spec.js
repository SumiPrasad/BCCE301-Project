/* global describe beforeEach  it expect Controller Branch */
describe('Question Four and Question Five', () => {
  describe('Branch', () => {
    let aBranch
    beforeEach(() => {
      aBranch = new Branch()
    })

    it('should have a .myBranchOwner reference', () => {
      expect(aBranch.hasOwnProperty('myBranchOwner')).toBeTruthy()
    })

    it('should have a .id property', () => {
      expect(aBranch.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .name property', () => {
      expect(aBranch.hasOwnProperty('name')).toBeTruthy()
    })

    it('should have a .purchaseDate property', () => {
      expect(aBranch.hasOwnProperty('purchaseDate')).toBeTruthy()
    })
  })

  describe('write a .addBranch function to add a Branch to a BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })

    it('BranchOwner 01 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('01')
      expect(theBranchOwner.allMyBranches.length).toBe(2)
    })

    it('BranchOwner 02 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('02')
      expect(theBranchOwner.allMyBranches.length).toBe(1)
    })

    it('BranchOwner 03 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('03')
      expect(theBranchOwner.allMyBranches.length).toBe(1)
    })

    it('BranchOwner 04 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('04')
      expect(theBranchOwner.allMyBranches.length).toBe(2)
    })

    it('should correctly set Branch details', () => {
            /*
            01    401     Mike's Chocolate Shop      Krakatoa Island    27-2-2011
            01    402     Cacao Bean                 Mt. Everest        12-8-2015
            03    389     The Hot Chocolate Shoppe   Sahara Desert      31-3-2013
            02    113     Chocolate Therapy          Amazon Rainforest  24-10-2004
            04    114     Arriba Chocolate           Siberia            4-3-2009
            04    121     The Cacao Walk             Gobi Desert        1-6-2014
            */
      let aBranch

      let theBranchOwner

      theBranchOwner = theChocolateFactory.findBranchOwner('01')
      theBranchOwner.sortBranches()
            // 01 401     Mike's Chocolate Shop      Krakatoa Island    27-2-2011
      aBranch = theBranchOwner.allMyBranches[0]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(401)
      expect(aBranch.name).toBe("Mike's Chocolate Shop")
      expect(aBranch.location).toBe('Krakatoa Island')
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2011)
      expect(aBranch.purchaseDate.getMonth()).toBe(1)
      expect(aBranch.purchaseDate.getDate()).toBe(27)
            // 01 402     Cacao Bean                 Mt. Everest        12-8-2015
      aBranch = theBranchOwner.allMyBranches[1]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(402)
      expect(aBranch.name).toBe('Cacao Bean')
      expect(aBranch.location).toBe('Mt. Everest')
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2015)
      expect(aBranch.purchaseDate.getMonth()).toBe(7)
      expect(aBranch.purchaseDate.getDate()).toBe(12)

      theBranchOwner = theChocolateFactory.findBranchOwner('02')
            // 02    113     Chocolate Therapy          Amazon Rainforest  24-10-2004
      aBranch = theBranchOwner.allMyBranches[0]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(113)
      expect(aBranch.name).toBe('Chocolate Therapy')
      expect(aBranch.location).toBe('Amazon Rainforest')
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2004)
      expect(aBranch.purchaseDate.getMonth()).toBe(9)
      expect(aBranch.purchaseDate.getDate()).toBe(24)

      theBranchOwner = theChocolateFactory.findBranchOwner('03')
      theBranchOwner.sortBranches()
            // 03 389     The Hot Chocolate Shoppe   Sahara Desert      31-3-2013
      aBranch = theBranchOwner.allMyBranches[0]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(389)
      expect(aBranch.name).toBe('The Hot Chocolate Shoppe')
      expect(aBranch.location).toBe('Sahara Desert')
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2013)
      expect(aBranch.purchaseDate.getMonth()).toBe(2)
      expect(aBranch.purchaseDate.getDate()).toBe(31)

      theBranchOwner = theChocolateFactory.findBranchOwner('04')
      aBranch = theBranchOwner.sortBranches()
            // 04    114     Arriba Chocolate           Siberia            4-3-2009
      aBranch = theBranchOwner.allMyBranches[0]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(114)
      expect(aBranch.name).toBe('Arriba Chocolate')
      expect(aBranch.location).toBe('Siberia')
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2009)
      expect(aBranch.purchaseDate.getMonth()).toBe(2)
      expect(aBranch.purchaseDate.getDate()).toBe(4)
            // 04    121     The Cacao Walk             Gobi Desert        1-6-2014
      aBranch = theBranchOwner.allMyBranches[1]
      expect(aBranch.myBranchOwner).toEqual(theBranchOwner)
      expect(aBranch.id).toBe(121)
      expect(aBranch.name).toBe('The Cacao Walk')
      expect(aBranch.location).toBe('Gobi Desert')
            // expect(aBranch.purchaseDate).toBe(new Date(2014, 5, 1))
      expect(aBranch.purchaseDate instanceof Date).toBe(true)
      expect(aBranch.purchaseDate.getFullYear()).toBe(2014)
      expect(aBranch.purchaseDate.getMonth()).toBe(5)
      expect(aBranch.purchaseDate.getDate()).toBe(1)
    })
  })
})

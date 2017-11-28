/* global describe beforeEach  it  Controller Branch */
describe('Question Four and Question Five', () => {
  describe('Branch', () => {
    let aBranch
    beforeEach(() => {
      aBranch = new Branch()
    })

    it('should have a .myBranchOwner reference', () => {
      aBranch.must.have.ownProperty('myBranchOwner')
    })

    it('should have a .id property', () => {
      aBranch.must.have.ownProperty('id')
    })

    it('should have a .name property', () => {
      aBranch.must.have.ownProperty('name')
    })

    it('should have a .purchaseDate property', () => {
      aBranch.must.have.ownProperty('purchaseDate')
    })
  })


  describe('write a .addBranch function to add a Branch to a BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })

    it('BranchOwner 01 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('01')
      theBranchOwner.allMyBranches.must.have.length(2)
    })

    it('BranchOwner 02 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('02')
      theBranchOwner.allMyBranches.must.have.length(1)
    })

    it('BranchOwner 03 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('03')
      theBranchOwner.allMyBranches.must.have.length(1)
    })

    it('BranchOwner 04 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('04')
      theBranchOwner.allMyBranches.must.have.length(2)
    })


describe('Branch Details', () => {
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
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
      aBranch.id.must.be.equal(401)
      aBranch.name.must.be.equal("Mike's Chocolate Shop")
      aBranch.location.must.be.equal('Krakatoa Island')
	  new Date(2011, 1,27).must.be.date()

     
            // 01 402     Cacao Bean                 Mt. Everest        12-8-2015
      aBranch = theBranchOwner.allMyBranches[1]
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
     aBranch.id.must.be.equal(402)
      aBranch.name.must.be.equal('Cacao Bean')
      aBranch.location.must.be.equal('Mt. Everest')
      new Date(2015, 7, 12).must.be.date()

      theBranchOwner = theChocolateFactory.findBranchOwner('02')
            // 02    113     Chocolate Therapy          Amazon Rainforest  24-10-2004
      aBranch = theBranchOwner.allMyBranches[0]
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
      aBranch.id.must.be.equal(113)
      aBranch.name.must.be.equal('Chocolate Therapy')
      aBranch.location.must.be.equal('Amazon Rainforest')
       new Date(2004, 9, 24).must.be.date()

      theBranchOwner = theChocolateFactory.findBranchOwner('03')
      theBranchOwner.sortBranches()
            // 03 389     The Hot Chocolate Shoppe   Sahara Desert      31-3-2013
      aBranch = theBranchOwner.allMyBranches[0]
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
      aBranch.id.must.be.equal(389)
      aBranch.name.must.be.equal('The Hot Chocolate Shoppe')
      aBranch.location.must.be.equal('Sahara Desert')
       new Date(2013, 2, 31).must.be.date()

      theBranchOwner = theChocolateFactory.findBranchOwner('04')
      aBranch = theBranchOwner.sortBranches()
            // 04    114     Arriba Chocolate           Siberia            4-3-2009
      aBranch = theBranchOwner.allMyBranches[0]
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
      aBranch.id.must.be.equal(114)
      aBranch.name.must.be.equal('Arriba Chocolate')
      aBranch.location.must.be.equal('Siberia')
       new Date(2009, 2, 4).must.be.date()
            // 04    121     The Cacao Walk             Gobi Desert        1-6-2014
      aBranch = theBranchOwner.allMyBranches[1]
      aBranch.myBranchOwner.must.be.equal(theBranchOwner)
      aBranch.id.must.be.equal(121)
      aBranch.name.must.be.equal('The Cacao Walk')
      aBranch.location.must.be.equal('Gobi Desert')
       new Date(2014, 5, 1).must.be.date()      
      
    })
})
  })
})

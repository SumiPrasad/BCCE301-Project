describe('Question Four and Question Five', () => {
  describe('Branch', () => {
    let aBranch;
    beforeEach(() => {
      aBranch = new Branch()
    })

    it('should have a .myBranchOwner reference', () => {
      assert.isTrue(aBranch.hasOwnProperty('myBranchOwner'))
    })

    it('should have a .id property', () => {
      assert.isTrue(aBranch.hasOwnProperty('id'))
    })

    it('should have a .name property', () => {
      assert.isTrue(aBranch.hasOwnProperty('name'))
    })

    it('should have a .purchaseDate property', () => {
      assert.isTrue(aBranch.hasOwnProperty('purchaseDate'))
    })
  })
  

  describe('write a .addBranch function to add a Branch to a BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })
  

    it('BranchOwner 01 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('01')
      assert.lengthOf(theBranchOwner.allMyBranches,2)
    })
 

    it('BranchOwner 02 should have 1 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('02')
      assert.lengthOf(theBranchOwner.allMyBranches,1)
    })

    it('BranchOwner 03 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('03')
      assert.lengthOf(theBranchOwner.allMyBranches,1)
    })

    it('BranchOwner 04 should have 2 Branches', () => {
      const theBranchOwner = theChocolateFactory.findBranchOwner('04')
      assert.lengthOf(theBranchOwner.allMyBranches,2)
    })
  
  
  
  describe('Branch details', () => {
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
      assert.equal(aBranch.myBranchOwner,theBranchOwner)
     assert.equal(aBranch.id,401)
      assert.equal(aBranch.name,"Mike's Chocolate Shop")
     assert.equal(aBranch.location,'Krakatoa Island')
     assert.deepEqual(aBranch.purchaseDate,new Date(2011, 1,27))
   
  
	
            // 01 402     Cacao Bean                 Mt. Everest        12-8-2015
      aBranch = theBranchOwner.allMyBranches[1]
       assert.equal(aBranch.myBranchOwner,theBranchOwner)
      assert.equal(aBranch.id,402)
      assert.equal(aBranch.name,'Cacao Bean')
      assert.equal(aBranch.location,'Mt. Everest')
      assert.deepEqual(aBranch.purchaseDate,new Date(2015, 7, 12))
 
  
  
      theBranchOwner = theChocolateFactory.findBranchOwner('02')
            // 02    113     Chocolate Therapy          Amazon Rainforest  24-10-2004
      aBranch = theBranchOwner.allMyBranches[0]
       assert.equal(aBranch.myBranchOwner,theBranchOwner)
      assert.equal(aBranch.id,113)
      assert.equal(aBranch.name,'Chocolate Therapy')
      assert.equal(aBranch.location,'Amazon Rainforest')
      assert.deepEqual(aBranch.purchaseDate,new Date(2004, 9, 24)) 
      
 
  
      theBranchOwner = theChocolateFactory.findBranchOwner('03')
      //theBranchOwner.sortBranches()
            // 03 389     The Hot Chocolate Shoppe   Sahara Desert      31-3-2013
      aBranch = theBranchOwner.allMyBranches[0]
      assert.equal(aBranch.myBranchOwner,theBranchOwner)
      assert.equal(aBranch.id,389)
      assert.equal(aBranch.name,'The Hot Chocolate Shoppe')
      assert.equal(aBranch.location,'Sahara Desert')
      assert.deepEqual(aBranch.purchaseDate,new Date(2013, 2, 31))
      

  
      theBranchOwner = theChocolateFactory.findBranchOwner('04')
      aBranch = theBranchOwner.sortBranches()
            // 04    114     Arriba Chocolate           Siberia            4-3-2009
      aBranch = theBranchOwner.allMyBranches[0]
      assert.equal(aBranch.myBranchOwner,theBranchOwner)
      assert.equal(aBranch.id,114)
      assert.equal(aBranch.name,'Arriba Chocolate')
      assert.equal(aBranch.location,'Siberia')
      assert.deepEqual(aBranch.purchaseDate,new Date(2009, 2, 4))
      
 
	  
            // 04    121     The Cacao Walk             Gobi Desert        1-6-2014
      aBranch = theBranchOwner.allMyBranches[1]
      assert.equal(aBranch.myBranchOwner,theBranchOwner)
      assert.equal(aBranch.id,121)
      assert.equal(aBranch.name,'The Cacao Walk')
      assert.equal(aBranch.location,'Gobi Desert')    
      assert.deepEqual(aBranch.purchaseDate,new Date(2014, 5, 1)) 
	})
   	 })
  }) 

  })
  
 

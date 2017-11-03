describe('Question Two', () => {
  describe('adding the four BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })

    it('should have added 4 BranchOwner', () => {
      assert.lengthOf(theChocolateFactory.allMyBranchOwners,4)
    })


    it('should have correctly set details for each BranchOwner', () => {
      let aBranchOwner
     theChocolateFactory.sortBranchOwners()

      aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
      assert.isDefined(aBranchOwner)
      assert.equal(aBranchOwner.id,'01')
      assert.equal(aBranchOwner.firstName,'Rachel')
      assert.equal(aBranchOwner.lastName,'Choi')
      assert.equal(aBranchOwner.gender,'F')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[1]
      assert.isDefined(aBranchOwner)
      assert.equal(aBranchOwner.id,'02')
      assert.equal(aBranchOwner.firstName,'Seunghyun')
      assert.equal(aBranchOwner.lastName,'Hunter')
      assert.equal(aBranchOwner.gender,'M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[2]
      assert.isDefined(aBranchOwner)
      assert.equal(aBranchOwner.id,'03')
      assert.equal(aBranchOwner.firstName,'Donald')
      assert.equal(aBranchOwner.lastName,'Rai')
      assert.equal(aBranchOwner.gender,'M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
      assert.isDefined(aBranchOwner)
      assert.equal(aBranchOwner.id,'04')
      assert.equal(aBranchOwner.firstName,'Aishwarya')
      assert.equal(aBranchOwner.lastName,'Trump')
      assert.equal(aBranchOwner.gender,'F')
   
	})
  })
})

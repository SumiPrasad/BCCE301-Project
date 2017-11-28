/* global describe beforeEach  it  Controller */
describe('Question Two', () => {
  describe('adding the four BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })


    it('should have added 4 BranchOwner', () => {
      theChocolateFactory.allMyBranchOwners.must.have.length(4)
    })



    it('should have correctly set details for each BranchOwner', () => {
      let aBranchOwner
      theChocolateFactory.sortBranchOwners()

      aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
      aBranchOwner.must.exist()
     aBranchOwner.id.must.be.equal('01')
    aBranchOwner.firstName.must.be.equal('Rachel')
     aBranchOwner.lastName.must.be.equal('Choi')
     aBranchOwner.gender.must.be.equal('F')


      aBranchOwner = theChocolateFactory.allMyBranchOwners[1]
      aBranchOwner.must.exist()
      aBranchOwner.id.must.be.equal('02')
      aBranchOwner.firstName.must.be.equal('Seunghyun')
      aBranchOwner.lastName.must.be.equal('Hunter')
      aBranchOwner.gender.must.be.equal('M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[2]
      aBranchOwner.must.exist()
      aBranchOwner.id.must.be.equal('03')
      aBranchOwner.firstName.must.be.equal('Donald')
      aBranchOwner.lastName.must.be.equal('Rai')
      aBranchOwner.gender.must.be.equal('M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
      aBranchOwner.must.exist()
      aBranchOwner.id.must.be.equal('04')
      aBranchOwner.firstName.must.be.equal('Aishwarya')
      aBranchOwner.lastName.must.be.equal('Trump')
      aBranchOwner.gender.must.be.equal('F')
    })
  })
})

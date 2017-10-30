/* global describe beforeEach  it expect Controller */
describe('Question Two', () => {
  describe('adding the four BranchOwner', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })

    it('should have added 4 BranchOwner', () => {
      expect(theChocolateFactory.allMyBranchOwners.length).toBe(4)
    })

    it('should have correctly set details for each BranchOwner', () => {
      let aBranchOwner
      theChocolateFactory.sortBranchOwners()

      aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
      expect(aBranchOwner).toBeDefined()
      expect(aBranchOwner.id).toBe('01')
      expect(aBranchOwner.firstName).toBe('Rachel')
      expect(aBranchOwner.lastName).toBe('Choi')
      expect(aBranchOwner.gender).toBe('F')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[1]
      expect(aBranchOwner).toBeDefined()
      expect(aBranchOwner.id).toBe('02')
      expect(aBranchOwner.firstName).toBe('Seunghyun')
      expect(aBranchOwner.lastName).toBe('Hunter')
      expect(aBranchOwner.gender).toBe('M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[2]
      expect(aBranchOwner).toBeDefined()
      expect(aBranchOwner.id).toBe('03')
      expect(aBranchOwner.firstName).toBe('Donald')
      expect(aBranchOwner.lastName).toBe('Rai')
      expect(aBranchOwner.gender).toBe('M')

      aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
      expect(aBranchOwner).toBeDefined()
      expect(aBranchOwner.id).toBe('04')
      expect(aBranchOwner.firstName).toBe('Aishwarya')
      expect(aBranchOwner.lastName).toBe('Trump')
      expect(aBranchOwner.gender).toBe('F')
    })
  })
})

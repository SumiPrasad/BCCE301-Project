/* global describe beforeEach  it expect Controller ChocolateFactory */
describe('Question Three', () => {
  describe('theChocolateFactory.getBranchOwners function', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })

    it('should exist', () => {
      expect(theChocolateFactory.getBranchOwners).toBeDefined()
    })
    it('should return a string', () => {
      expect(typeof theChocolateFactory.getBranchOwners()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theChocolateFactory = new ChocolateFactory()

      expect(theChocolateFactory.getBranchOwners()).toBe('')
    })

        // 01. Rachel Choi\n02. Seunghyun Hunter\n03. Donald Rai\n04. Aishwarya Trump\n'

    describe('Should return correctly formatted data', () => {
      describe('The IDs', () => {
        it('Should start with ID', () => {
          expect(theChocolateFactory.getBranchOwners()).toMatch(/\d\d.\s/)
        })
      })
      describe('Puntuation after each ID', () => {
        it('Should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          expect(output).toMatch(/\d\d.\s[RSDA]/)
		
        })
      })
      describe('First names should follow the order of ID', () => {
        it('First character of FirstName should be in [RSDA] ie Rachel or Seunghyun or Donald or Aishwarya', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
          expect(theBranchOwner.firstName).toMatch(/^[RSDA](.{5,8})/)
        })
      })
      describe('Puntuation after each First Name', () => {
        it('Should follow a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          expect(output).toMatch(/[lnda]\s[CHRT]/)
        })
      })
      describe('Last names of the BranchOwners', () => {
        it('First character of LastName should be in [CHRT] ie Choi or Hunter or Rai or Trump', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
          expect(theBranchOwner.lastName).toMatch(/^[CHRT](.{2,5})/)
        })
      })
	  describe('Puntuation after Name', () => {
          it('Should end with the newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/[rip]\n/)
          })
        })
    })
  })
})

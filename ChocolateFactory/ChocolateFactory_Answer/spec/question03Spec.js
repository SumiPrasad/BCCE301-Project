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
        it('should start with ID', () => {
          expect(theChocolateFactory.getBranchOwners()).toMatch(/\d*/)
        })
      })
      describe('Puntuation after each ID', () => {
        it('should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          expect(output).toMatch(/[.\s)]/)
        })
      })
      describe('First names should follow the order of ID', () => {
        it('First character of FirstName should be in [RSDA]', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
          expect(theBranchOwner.firstName).toMatch(/^[RSDA](.{5,8})/)
        })
      })
      describe('Puntuation after each First Name', () => {
        it('should follow a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          expect(output).toMatch(/[\s)]/)
        })
      })
      describe('Last names should be in the order of ID', () => {
        it('First character of LastName should be in [CHRT]', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
          expect(theBranchOwner.lastName).toMatch(/^[CHRT](.{2,5})/)
        })
      })
    })
  })
})

/* global describe beforeEach  it expect Controller ChocolateFactory */
describe('Question Three', () => {
  describe('theChocolateFactory.getBranchOwners function', () => {
    let theChocolateFactory
    beforeEach(() => {
      theChocolateFactory = Controller.setup()
    })
 it('should exist', () => {
      (theChocolateFactory.getBranchOwners).must.exist()
    })
	
	it('should return a string', () => {
		let output =  theChocolateFactory.getBranchOwners()
      output.must.be.a.string();
    })
     it('should NOT be hard coded', () => {
      theChocolateFactory.getBranchOwners.must.be.empty()
    })
 

    describe('Should return correctly formatted data', () => {
      describe('The IDs', () => {
        it('Should start with ID', () => {
          theChocolateFactory.getBranchOwners().must.match(/\d\d\.\s/)
        })
      })
	  describe('Puntuation after each ID', () => {
        it('Should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          output.must.match(/\d\d\.\s[RSDA]/)
		
        })
      })
      describe('First names should follow the order of ID', () => {
        it('First character of FirstName should be in [RSDA] ie Rachel or Seunghyun or Donald or Aishwarya', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
         theBranchOwner.firstName.must.match(/^[RSDA](.{5,8})/)
        })
      })
      describe('Puntuation after each First Name', () => {
        it('Should follow a single space', () => {
          let output = theChocolateFactory.getBranchOwners()
          output.must.match(/[lnda]\s[CHRT]/)
        })
      })
      describe('Last names of the BranchOwners', () => {
        it('First character of LastName should be in [CHRT] ie Choi or Hunter or Rai or Trump', () => {
          let theBranchOwner
          theBranchOwner = theChocolateFactory.getBranchOwners()
          theBranchOwner = theChocolateFactory.allMyBranchOwners[(0, 1, 2, 3)]
          theBranchOwner.lastName.must.match(/^[CHRT](.{2,5})/)
        })
      })
	  describe('Puntuation after Name', () => {
          it('Should end with the newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/[rip]\n/)
          })
        })
	})
	   })
})

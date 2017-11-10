/* global describe beforeEach  it  Controller ChocolateFactory */
describe('Question Seven', () => {
  describe('getBranchOwnersWithTwoBranches function', () => {
    let theChocolateFactory
    beforeEach(
            () => {
              theChocolateFactory = Controller.setup()
            }
        )

    it('Should exist', () => {
      theChocolateFactory.getBranchOwnersWithTwoBranches.must.exist()
    })
    it('Should return a string', () => {
		let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
      output.must.be.a.string()
    })

    it('Should NOT be hard coded', () => {
     
      theChocolateFactory.getBranchOwnersWithTwoBranches.must.be.empty()
    })

/* 01. Rachel Choi\n    401 Mike's Chocolate Shop,  Krakatoa Island.\n    402 Cacao Bean,  Mt. Everest.\n04. Aishwarya Trump\n    114 Arriba Chocolate,  Siberia.\n    121 The Cacao Walk,  Gobi Desert.\n */

    describe('Should correctly report details of BranchOwners who has 2 Branches', () => {
      describe('The ID of First BranchOwner ', () => {
        it('Should be 01', () => {
          theChocolateFactory.getBranchOwnersWithTwoBranches().must.match(/(01.\s[R])/)
        })
      })
      describe('The ID of Second BranchOwner ', () => {
        it('Should be 04', () => {
          theChocolateFactory.getBranchOwnersWithTwoBranches().must.match(/(04.\s[A])/)
        })
      })
      describe('Puntuation after  ID', () => {
        it('Should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          output.must.match(/\d{2}.\s/)
        })
      })
      describe('The First Branchowner\'s firstName', () => {
        it('Should be Rachel', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          output.must.match(/(.\sRachel\s)/)
        })
      })
      describe('The Second Branchowner\'s firstName', () => {
        it('Should be Aishwarya', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          output.must.match(/.\sAishwarya\s/)
        })
      })
      describe('The punctuation after the firstname', () => {
        it(' Should be single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          output.must.match(/[la]\s[CT]/)
        })
      })
	  
      describe('The First Branchowner\'s lastname', () => {
        it('Should be Choi', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
          aBranchOwner.lastName.must.match(/(^[C][^A-Z]{3})/)
        })
      })
      describe('The Second Branchowner\'s lastname', () => {
        it('Should be Trump', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
          aBranchOwner.lastName.must.match(/(^[T][^A-Z]{4})/)
        })
      })
	  
      describe('After the owner\'s lastname', () => {
        it('Should be a newline', () => {
          theChocolateFactory.getBranchOwnersWithTwoBranches().must.match(/\s.*\n\t/)
        })
      })
      describe('Each Branch\'s details', () => {
        it('Should start with a tab ie "\t"', () => {
          theChocolateFactory.getBranchOwnersWithTwoBranches().must.match(/\t\d{3}\s/)
        })
      })
      describe('Rachel\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 401', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\s(401)\s(Mike's)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Mike\'s Chocolate Shop', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/Mike's\sChocolate\sShop/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Krakatoa Island', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/Krakatoa\sIsland/)
          })
        })

        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\.\n/)
          })
        })
      })
      describe('Rachel\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 402', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/(402)\s(Cacao)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Cacao Bean', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/Cacao\sBean/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Mt. Everest', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/Mt\.\sEverest/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\.\n/)
          })
        })
      })

      describe('Aishwarya\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 114', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/(114)\s(Arriba)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be Arriba Chocolate', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\sArriba\sChocolate/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Siberia', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\sSiberia./)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\.\n/)
          })
        })
      })
      describe('Aishwarya\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 121', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/(121)\s(The)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be The Cacao Walk', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\sThe\sCacao\sWalk/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Gobi Desert', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/Gobi\sDesert/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            output.must.match(/\.\n/)
          })
        })
      })
    })
  })
})

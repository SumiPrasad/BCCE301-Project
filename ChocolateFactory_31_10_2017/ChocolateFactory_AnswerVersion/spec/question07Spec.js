/* global describe beforeEach  it expect Controller ChocolateFactory */
describe('Question Seven', () => {
  describe('getBranchOwnersWithTwoBranches function', () => {
    let theChocolateFactory
    beforeEach(
            () => {
              theChocolateFactory = Controller.setup()
            }
        )

    it('Should be defined', () => {
      expect(theChocolateFactory.getBranchOwnersWithTwoBranches).toBeDefined()
    })
    it('Should return a string', () => {
      expect(typeof theChocolateFactory.getBranchOwnersWithTwoBranches()).toBe('string')
    })

    it('Should NOT be hard coded', () => {
      theChocolateFactory = new ChocolateFactory()
      expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toBe('')
    })

/* 01. Rachel Choi\n    401 Mike's Chocolate Shop,  Krakatoa Island.\n    402 Cacao Bean,  Mt. Everest.\n04. Aishwarya Trump\n    114 Arriba Chocolate,  Siberia.\n    121 The Cacao Walk,  Gobi Desert.\n */

    describe('Should correctly report details of BranchOwners who has 2 Branches', () => {
      describe('The ID of First BranchOwner ', () => {
        it('Should be 01', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/(01.\s[R])/)
        })
      })
      describe('The ID of Second BranchOwner ', () => {
        it('Should be 04', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/(04.\s[A])/)
        })
      })
      describe('Puntuation after  ID', () => {
        it('Should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          expect(output).toMatch(/\d{2}.\s/)
        })
      })
      describe('The First Branchowner\'s firstName', () => {
        it('Should be Rachel', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          expect(output).toMatch(/(.\sRachel\s)/)
        })
      })
      describe('The Second Branchowner\'s firstName', () => {
        it('Should be Aishwarya', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          expect(output).toMatch(/.\sAishwarya\s/)
        })
      })
      describe('The punctuation after the firstname', () => {
        it(' Should be single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          expect(output).toMatch(/[la]\s[CT]/)
        })
      })
	  
      describe('The First Branchowner\'s lastname', () => {
        it('Should be Choi', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
          expect(aBranchOwner.lastName).toMatch(/(^[C][^A-Z]{3})/)
        })
      })
      describe('The Second Branchowner\'s lastname', () => {
        it('Should be Trump', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
          expect(aBranchOwner.lastName).toMatch(/(^[T][^A-Z]{4})/)
        })
      })
	  
      describe('After the owner\'s lastname', () => {
        it('Should be a newline', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/\s.*\n\t/)
        })
      })
      describe('Each Branch\'s details', () => {
        it('Should start with a tab ie "\t"', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/\t\d{3}\s/)
        })
      })
      describe('Rachel\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 401', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\s(401)\s(Mike's)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Mike\'s Chocolate Shop', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Mike's\sChocolate\sShop/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Krakatoa Island', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Krakatoa\sIsland/)
          })
        })

        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\.\n/)
          })
        })
      })
      describe('Rachel\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 402', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(402)\s(Cacao)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Cacao Bean', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Cacao\sBean/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Mt. Everest', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Mt\.\sEverest/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\.\n/)
          })
        })
      })

      describe('Aishwarya\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 114', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(114)\s(Arriba)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be Arriba Chocolate', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\sArriba\sChocolate/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Siberia', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\sSiberia./)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\.\n/)
          })
        })
      })
      describe('Aishwarya\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 121', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(121)\s(The)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be The Cacao Walk', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\sThe\sCacao\sWalk/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Gobi Desert', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Gobi\sDesert/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/\.\n/)
          })
        })
      })
    })
  })
})

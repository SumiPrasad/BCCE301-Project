/* global describe beforeEach  it expect Controller ChocolateFactory */
describe('Question Seven', () => {
  describe('getBranchOwnersWithTwoBranches function', () => {
    let theChocolateFactory
    beforeEach(
            () => {
              theChocolateFactory = Controller.setup()
            }
        )

    it('should be defined', () => {
      expect(theChocolateFactory.getBranchOwnersWithTwoBranches).toBeDefined()
    })
    it('should return a string', () => {
      expect(typeof theChocolateFactory.getBranchOwnersWithTwoBranches()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theChocolateFactory = new ChocolateFactory()
      expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toBe('')
    })

/* 01. Rachel Choi\n    401 Mike's Chocolate Shop,  Krakatoa Island.\n    402 Cacao Bean,  Mt. Everest.\n04. Aishwarya Trump\n    114 Arriba Chocolate,  Siberia.\n    121 The Cacao Walk,  Gobi Desert.\n */

    describe('should correctly report details of BranchOwners who has 2 Branches', () => {
      describe('The ID of First BranchOwner ', () => {
        it('should be 01', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/(01)/)
        })
      })
      describe('The ID of Second BranchOwner ', () => {
        it('should be 04', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/(04)/)
        })
      })
      describe('Puntuation after  ID', () => {
        it('should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          expect(output).toMatch(/.\s/)
        })
      })
      describe('The First Branchowner\'s firstName', () => {
        it('should be Rachel', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          expect(output).toMatch(/(Rachel)/)
        })
      })
      describe('The Second Branchowner\'s firstName', () => {
        it('should be Aishwarya', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          expect(output).toMatch(/Aishwarya/)
        })
      })
      describe('The punctuation after the firstname', () => {
        it(' should be single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          expect(output).toMatch(/\s/)
        })
      })
      describe('The First Branchowner\'s lastname', () => {
        it('should be Choi', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
          expect(aBranchOwner.lastName).toMatch(/(^[C][^A-Z]{3})/)
        })
      })
      describe('The Second Branchowner\'s lastname', () => {
        it('should be Trump', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
          expect(aBranchOwner.lastName).toMatch(/(^[T][^A-Z]{4})/)
        })
      })
      describe('After the owner\'s lastname', () => {
        it('should be a newline', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/\n/)
        })
      })
      describe('Each Branch\'s details', () => {
        it('should have four leading spaces', () => {
          expect(theChocolateFactory.getBranchOwnersWithTwoBranches()).toMatch(/\s(4)/)
        })
      })
      describe('Rachel\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Branch ID should be 401', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(401)/)
          })
        })
        describe('The Branch name', () => {
          it('Branch Name should be Mike\'s Chocolate Shop', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Mike's\sChocolate\sShop/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Branch Name should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Branch Location should be Krakatoa Island', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Krakatoa\sIsland/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Location name should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.\n/)
          })
        })
      })
      describe('Rachel\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Branch ID should be 402', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(402)/)
          })
        })
        describe('The Branch name', () => {
          it('Branch Name should be Cacao Bean', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Cacao\sBean/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Branch Name should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Branch Location should be Mt. Everest', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Mt\.\sEverest/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Location name should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.\n/)
          })
        })
      })

      describe('Aishwarya \'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Branch ID should be 114', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(114)/)
          })
        })

        describe('The Branch name', () => {
          it('Branch Name should be Arriba Chocolate', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Arriba\sChocolate/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Branch Name should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Branch Location should be Siberia', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Siberia/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Location name should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.\n/)
          })
        })
      })
      describe('Aishwarya \'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Branch ID should be 121', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/(121)/)
          })
        })

        describe('The Branch name', () => {
          it('Branch Name should be The Cacao Walk', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/The\sCacao\sWalk/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Branch Name should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Branch Location should be Gobi Desert', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/Gobi\sDesert/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Location name should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            expect(output).toMatch(/.\n/)
          })
        })
      })
    })
  })
})

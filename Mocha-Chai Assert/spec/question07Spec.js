

describe('Question Seven', () => {
  describe('theChocolateFactory.getBranchOwnersWithTwoBranches function', () => {
    let theChocolateFactory
    beforeEach(() => {
              theChocolateFactory = Controller.setup()
            })

    it('Should be defined', () => {
      assert.isDefined(theChocolateFactory.getBranchOwnersWithTwoBranches)
    })
	
     it('Should return a string', () => {
      assert.isString(theChocolateFactory.getBranchOwnersWithTwoBranches())
    })
	
	it('Should NOT be hard coded', () => {
      theChocolateFactory = new ChocolateFactory()
      assert.equal(theChocolateFactory.getBranchOwnersWithTwoBranches(),'')
    })
  
	
 describe('Should correctly report details of BranchOwners who has 2 Branches', () => {
 describe('The ID of First BranchOwner ', () => {
 it('Should be 01', () => {
      assert.match(theChocolateFactory.getBranchOwnersWithTwoBranches(), /01.\s[R]/)
    })
 })
 describe('The ID of Second BranchOwner ', () => {
        it('Should be 04', () => {
          assert.match(theChocolateFactory.getBranchOwnersWithTwoBranches(),/(04.\s[A])/)
        })
      })
	  describe('Puntuation after  ID', () => {
        it('Should be a dot followed by a single space', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
          assert.match(output,/\d{2}.\s/)
        })
      })
      describe('The First Branchowner\'s firstName', () => {
        it('Should be Rachel', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          assert.match(output,/(.\sRachel\s)/)
        })
      })
      describe('The Second Branchowner\'s firstName', () => {
        it('Should be Aishwarya', () => {
          let output = theChocolateFactory.getBranchOwnersWithTwoBranches()

          assert.match(output,/.\sAishwarya\s/)
        })
      })
	 describe('The First Branchowner\'s lastname', () => {
        it('Should be Choi', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[0]
          assert.match(aBranchOwner.lastName,/(^[C][^A-Z]{3})/)
        })
      })
      describe('The Second Branchowner\'s lastname', () => {
        it('Should be Trump', () => {
          let aBranchOwner
          aBranchOwner = theChocolateFactory.getBranchOwnersWithTwoBranches()
          aBranchOwner = theChocolateFactory.allMyBranchOwners[3]
          assert.match(aBranchOwner.lastName,/(^[T][^A-Z]{4})/)
        })
      })
	  describe('After the owner\'s lastname', () => {
        it('Should be a newline', () => {
          assert.match(theChocolateFactory.getBranchOwnersWithTwoBranches(),/\s.*\n\t/)
        })
      })
      describe('Each Branch\'s details', () => {
        it('Should start with a tab ie "\t"', () => {
          assert.match(theChocolateFactory.getBranchOwnersWithTwoBranches(),/\t\d{3}\s/)
        })
      })
	 describe('Rachel\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 401', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\s(401)\s(Mike's)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Mike\'s Chocolate Shop', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/Mike's\sChocolate\sShop/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Krakatoa Island', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/Krakatoa\sIsland/)
          })
        })

        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\.\n/)
          })
        })
      })  
	  describe('Rachel\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 402', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/(402)\s(Cacao)/)
          })
        })
        describe('The Branch name', () => {
          it('Should be Cacao Bean', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/Cacao\sBean/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Mt. Everest', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
           assert.match(output,/Mt\.\sEverest/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\.\n/)
          })
        })
      })
	  
       describe('Aishwarya\'s first branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 114', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/(114)\s(Arriba)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be Arriba Chocolate', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\sArriba\sChocolate/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Siberia', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\sSiberia./)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\.\n/)
          })
        })
      })
 
 describe('Aishwarya\'s second branch details', () => {
        describe('The Branch ID', () => {
          it('Should be 121', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/(121)\s(The)/)
          })
        })

        describe('The Branch name', () => {
          it('Should be The Cacao Walk', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\sThe\sCacao\sWalk/)
          })
        })
        describe('The Puntuation after Branch name', () => {
          it('Should be followed by a comma and two spaces', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/.*\,\s\s/)
          })
        })
        describe('The Branch Location', () => {
          it('Should be Gobi Desert', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/Gobi\sDesert/)
          })
        })
        describe('The Puntuation after Location name', () => {
          it('Should end with dot and newline', () => {
            let output = theChocolateFactory.getBranchOwnersWithTwoBranches()
            assert.match(output,/\.\n/)
          })
        })
      })
 
 
 })
  })
  
 }) 


      
      




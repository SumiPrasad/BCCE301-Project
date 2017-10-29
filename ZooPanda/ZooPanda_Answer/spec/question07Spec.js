/* global describe beforeEach  it expect Controller Zoo */
describe('Question Seven', () => {
  describe('getPandaSponsorsWithTwoPandas function', () => {
    let theZoo
    beforeEach(
            () => {
              theZoo = Controller.setup()
            }
        )

    it('should be defined', () => {
      expect(theZoo.getPandaSponsorsWithTwoPandas).toBeDefined()
    })
    it('should return a string', () => {
      expect(typeof theZoo.getPandaSponsorsWithTwoPandas()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theZoo = new Zoo()
      expect(theZoo.getPandaSponsorsWithTwoPandas()).toBe('')
    })



    describe('should correctly report details of PandaSponsors with two Pandas', () => {
      describe('The ID of PandaSponsor ', () => {
        it('should be 01', () => {
          expect(theZoo.getPandaSponsorsWithTwoPandas()).toMatch(/(01)/)
        })
      })
     
      describe('Puntuation after  ID', () => {
        it('should be a dot followed by a single space', () => {
          let output = theZoo.getPandaSponsorsWithTwoPandas()
          expect(output).toMatch(/.\s/)
        })
      })
      describe('The PandaSponsor firstName', () => {
        it('should be June', () => {
          let output = theZoo.getPandaSponsorsWithTwoPandas()
          expect(output).toMatch(/(June)/)
        })
      })
      
      describe('The punctuation after the firstname', () => {
        it(' should be single space', () => {
          let output = theZoo.getPandaSponsorsWithTwoPandas()
          expect(output).toMatch(/\s/)
        })
      })
      describe('The The PandaSponsor lastname', () => {
        it('should be Gardiner', () => {
          let aPandaSponsor
          aPandaSponsor = theZoo.getPandaSponsorsWithTwoPandas()
          aPandaSponsor = theZoo.allMyPandaSponsors[0]
          expect(aPandaSponsor.lastName).toMatch(/(Gardiner)/)
        })
      })
      
      describe('After the PandaSponsor\'s lastname', () => {
        it('should be a newline', () => {
          expect(theZoo.getPandaSponsorsWithTwoPandas()).toMatch(/\n/)
        })
      })
	  
	  describe('June\'s first panda details', () => {
        describe('The First Panda ID', () => {
          it('Panda ID should be 100', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/(100)/)
          })
        })
		 describe('The Puntuation after Panda ID', () => {
          it('Panda ID should be followed by a single space', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\s/)
          })
        })
        describe('The First Panda name', () => {
          it('Panda Name should be Bai Yun', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/Bai\sYun/)
          })
        })
        describe('The Gender of First Panda', () => {
          it('Gender should be F and enclosed in brackets with spaces ie "( F )"', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\(\sF\s\)/)
          })
        })
		describe('Wordings after gender', () => {
          it('should be " Panda from "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sPanda\sfrom\s/)
          })
        })
		describe('The location of First Panda', () => {
          it('should be " San Diego Zoo "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sSan\sDiego\sZoo\s/)
          })
        })
		describe('Wordings after location', () => {
          it('should be " is "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sis\s/)
          })
        })
		describe('The Age of First Panda', () => {
          it('should be 4', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/(4)/)
          })
        })
		describe('Wordings after Age', () => {
          it('should be " years old "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\syears\sold/)
          })
        })
        
      })
	  
	   describe('June\'s second panda details', () => {
        describe('The Second Panda ID', () => {
          it('Panda ID should be 110', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/(110)/)
          })
        })
		 describe('The Puntuation after Panda ID', () => {
          it('Panda ID should be followed by a single space', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\s/)
          })
        })
        describe('The Second Panda name', () => {
          it('Panda Name should be Bao Bao', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/Bao\sBao/)
          })
        })
        describe('The Gender of Second Panda', () => {
          it('Gender should be F and enclosed in brackets with spaces ie "( F )"', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\(\sF\s\)/)
          })
        })
		describe('Wordings after gender', () => {
          it('should be " Panda from "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sPanda\sfrom\s/)
          })
        })
		describe('The location od Second Panda', () => {
          it('should be " National Zoo China "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sNational\sZoo\sChina\s/)
          })
        })
		describe('Wordings after location', () => {
          it('should be " is "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\sis\s/)
          })
        })
		describe('The Age of Second Panda', () => {
          it('should be 16', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/(16)/)
          })
        })
		describe('Wordings after Age', () => {
          it('should be " years old "', () => {
            let output = theZoo.getPandaSponsorsWithTwoPandas()
            expect(output).toMatch(/\syears\sold/)
          })
        })
        
      })
	})
    })
  })

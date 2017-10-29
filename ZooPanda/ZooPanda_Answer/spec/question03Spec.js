/* global describe beforeEach  it expect Controller Zoo */
describe('Question Three', () => {
  describe('theZoo.getPandaSponsors function', () => {
    let theZoo
    beforeEach(() => {
      theZoo = Controller.setup()
    })

    it('should exist', () => {
      expect(theZoo.getPandaSponsors).toBeDefined()
    })
    it('should return a string', () => {
      expect(typeof theZoo.getPandaSponsors()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theZoo = new Zoo()

      expect(theZoo.getPandaSponsors()).toBe('')
    })

        //01. June Gardiner\n02. Meryl Henry\n03. Maurice Cook\n04. William Cambell\n'

    describe('Should return correctly formatted data', () => {
      describe('The IDs', () => {
        it('should start with ID', () => {
			let output = theZoo.getPandaSponsors()
          expect(output).toMatch(/[\d]/)
  
      })
	  })
      describe('Puntuation after each ID', () => {
        it('should be a dot followed by dot a single space', () => {
          let output = theZoo.getPandaSponsors()
          expect(output).toMatch(/.\s/)
        })
      })
	
      describe('First name of the Panda Sponsor', () => {
        it('First character of FirstName should be in [JMW]', () => {
          let thePandaSponsor
          thePandaSponsor = theZoo.getPandaSponsors()
          thePandaSponsor = theZoo.allMyPandaSponsors[0, 1, 2, 3]
          expect(thePandaSponsor.firstName).toMatch(/^[JMW](.{3,6})/)
        })
      })
	  
      describe('Puntuation after each First Name', () => {
        it('should follow a single space', () => {
          let output = theZoo.getPandaSponsors()
          expect(output).toMatch(/\s/)
        })
      })
      describe('Last names of the Panda Sponsor', () => {
        it('First character of LastName should be in [GHC]', () => {
     
          let thePandaSponsor
          thePandaSponsor = theZoo.getPandaSponsors()
          thePandaSponsor = theZoo.allMyPandaSponsors[0, 1, 2, 3]
          expect(thePandaSponsor.lastName).toMatch(/^[GHC](.{3,7})/)
        })
      })
	  
	  describe('End of each sponsor details', () => {
        it('should end with the newline character', () => { 
          expect(theZoo.getPandaSponsors()).toMatch(/\n/)
        })
      })
	  
	})
    })
  })


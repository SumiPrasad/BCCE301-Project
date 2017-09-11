/* globals describe beforeEach  it expect Controller Sanctuary */
describe('Question Seven', () => {
  describe('Sanctuary.getThoseWithTwoElephants function', () => {
    let theSanctuary
    beforeEach(
            () => {
              theSanctuary = Controller.setup()
            }
        )

    it('should return a string', () => {
      expect(typeof theSanctuary.getThoseWithTwoElephants()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getThoseWithTwoElephants()).toBe('')
    })
	describe('Should return correctly formatted data as below', () => {
	//Joby, Thomas. <JOT>\n	Black African bush (M) has 12ft\n	Greyish Brown Asian (M) has 11ft\n
	
	 it('Subpart 1 : should have first name Joby', () => {
	 expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(^[J][^A-Z]{3})/)
	  })
	
	it('Subpart 2: First name should be followed by a comma and space', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[,\s)]/)
	  })
	 
	  it('Subpart 3: should have second name Thomas ', () => {
		let anElephantOwner
       anElephantOwner = theSanctuary.getThoseWithTwoElephants()
	   anElephantOwner = theSanctuary.allMyElephantOwners[1]
	   expect(anElephantOwner.lastName).toMatch(/(^[T][^A-Z]{5})/)
   
	  })
	
	it('Subpart 4: Second name should be followed by a dot and space', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[\.\s]/)
	  })
	  
      it('Subpart 5: should have JOT enclosed in []', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\[\w{3}\]/)
	  })
	  
	  it('Subpart 6: should have a newline', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\n/)
	  })
	  
	  it('Subpart 7: should have a tab', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\t/)
	  })
	  it('Subpart 8: should have a Black African bush ', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(Black\sAfrican\sbush)/)
	  })
	  
	  it('Subpart 9: should have a (M)', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(\s)+(\(\w\))+(\s)/)
	  })
	  it('Subpart 10: should have a has 12ft', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/has 12ft/)
	  })
	  it('Subpart 11: should have a tab', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\t/)
	  })
	  it('Subpart 12: should have a Greyish Brown Asian ', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/Greyish\sBrown\sAsian/)
	  })
	  
	  it('Subpart 13: should have a (M)', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(\s)+(\(\w\))+(\s)/)
	  })
	  it('Subpart 14: should have a has 11ft', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/has 11ft/)
	  })
	   it('Subpart 15: should have a newline', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\n/)
	  })
	 
	})
  })
})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
/* globals describe beforeEach  it expect Controller Sanctuary */
describe('Question Three', () => {
  describe('Sanctuary.getElephantOwners function', () => {
    let theSanctuary
    beforeEach(() => {
      theSanctuary = Controller.setup()
    })

    it('should return a string', () => {
      expect(typeof theSanctuary.getElephantOwners()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getElephantOwners()).toBe('')
    })

 //'Adam, Taylor. [ATR]\nJoby, Thomas. [JOT]\nRobert, William. [RWM]\nTania, Paul. [TPL]\n')
    
	describe('Should return correctly formatted data as below', () => {
	
	it('Subpart 1 : First character of First name should be in [A,J,R,T]', () => {
	 expect(theSanctuary.getElephantOwners()).toMatch(/^[AJRT](.{3,5})/)
	  })
	
	it('Subpart 2: First name should be followed by a comma and space', () => {
      expect(theSanctuary.getElephantOwners()).toMatch(/[,\s)]/)
	  })
	 
	  it('Subpart 3: Last character of Second name should be in [r,s,m,l]', () => {
		expect(theSanctuary.getElephantOwners()).toMatch(/^[a-zA-Z][a-zA-Z]/)
     // expect(theSanctuary.getElephantOwners()).toMatch(/^[TWP](.{3,6})/)
     // expect(theSanctuary.getElephantOwners()).toMatch(/(.{3,6})[rsml]$/)
	  })
	
	it('Subpart 4: Second name should be followed by a dot and space', () => {
      expect(theSanctuary.getElephantOwners()).toMatch(/[\.\s]/)
	  })
	  
      it('Subpart 5: should have three character id enclosed in []', () => {
      expect(theSanctuary.getElephantOwners()).toMatch(/\[\w{3}\]/)
	  })
	  
	  it('Subpart 6: should have a newline', () => {
      expect(theSanctuary.getElephantOwners()).toMatch(/\n/)
	  })
	})
  })
})
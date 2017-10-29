/* global describe beforeEach  it expect Controller Panda */
describe('Question Four and Question Five', () => {
  describe('Panda', () => {
    let aPanda
    beforeEach(() => {
      aPanda = new Panda()
    })

    it('should have a .myPandaSponsor reference', () => {
      expect(aPanda.hasOwnProperty('myPandaSponsor')).toBeTruthy()
    })

    it('should have a .id property', () => {
      expect(aPanda.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .name property', () => {
      expect(aPanda.hasOwnProperty('name')).toBeTruthy()
    })
	it('should have a .gender property', () => {
      expect(aPanda.hasOwnProperty('gender')).toBeTruthy()
    })
	it('should have a .age property', () => {
      expect(aPanda.hasOwnProperty('age')).toBeTruthy()
    })
	it('should have a .location property', () => {
      expect(aPanda.hasOwnProperty('location')).toBeTruthy()
    })

    
  })

  describe('write a .addPanda function to add a Panda to an PandaSponsor', () => {
    let theZoo
    beforeEach(() => {
      theZoo = Controller.setup()
    })

    it('PandaSponsor 01 should have 2 Pandas', () => {
      const thePandaSponsor = theZoo.findPandaSponsor('01')
      expect(thePandaSponsor.allMyPandas.length).toBe(2)
    })

    it('BranchOwner 02 should have 1 Panda', () => {
      const thePandaSponsor = theZoo.findPandaSponsor('02')
      expect(thePandaSponsor.allMyPandas.length).toBe(1)
    })

    it('BranchOwner 03 should have 1 Panda', () => {
      const thePandaSponsor = theZoo.findPandaSponsor('03')
      expect(thePandaSponsor.allMyPandas.length).toBe(1)
    })

    it('BranchOwner 04 should have 1 Panda', () => {
      const thePandaSponsor = theZoo.findPandaSponsor('04')
      expect(thePandaSponsor.allMyPandas.length).toBe(1)
    })

    it('should correctly set Panda details', () => {
           
      let aPanda

      let thePandaSponsor

      thePandaSponsor = theZoo.findPandaSponsor('01')
      thePandaSponsor.sortPandas()
	  
	 
	  
            // 01	100 	Bai Yun	F	4	San Diego Zoo
      aPanda = thePandaSponsor.allMyPandas[0]
      expect(aPanda.myPandaSponsor).toEqual(thePandaSponsor)
      expect(aPanda.id).toBe(100)
      expect(aPanda.name).toBe('Bai Yun')
	  expect(aPanda.gender).toBe('F')
	  expect(aPanda.age).toBe(4)
      expect(aPanda.location).toBe('San Diego Zoo')
	  
	         // 01	110 Bao Bao	F 16 National Zoo China
      aPanda = thePandaSponsor.allMyPandas[1]
      expect(aPanda.myPandaSponsor).toEqual(thePandaSponsor)
      expect(aPanda.id).toBe(110)
      expect(aPanda.name).toBe('Bao Bao')
	  expect(aPanda.gender).toBe('F')
	  expect(aPanda.age).toBe(16)
      expect(aPanda.location).toBe('National Zoo China')
      
      

      thePandaSponsor = theZoo.findPandaSponsor('02')
            // 02 450			Gu Gu	M		10		Beijing Zoo
      aPanda = thePandaSponsor.allMyPandas[0]
      expect(aPanda.myPandaSponsor).toEqual(thePandaSponsor)
      expect(aPanda.id).toBe(450)
      expect(aPanda.name).toBe('Gu Gu')
	  expect(aPanda.gender).toBe('M')
	  expect(aPanda.age).toBe(10)
      expect(aPanda.location).toBe('Beijing Zoo')

      thePandaSponsor = theZoo.findPandaSponsor('03')
            // 03					320			Po				M              	5           Zoo Atlanta
      aPanda = thePandaSponsor.allMyPandas[0]
      expect(aPanda.myPandaSponsor).toEqual(thePandaSponsor)
      expect(aPanda.id).toBe(320)
      expect(aPanda.name).toBe('Po')
	  expect(aPanda.gender).toBe('M')
	  expect(aPanda.age).toBe(5)
      expect(aPanda.location).toBe('Zoo Atlanta')

      thePandaSponsor = theZoo.findPandaSponsor('04')
            // 04                  570			Da Mao          F              	20          Toronto Zoo
      aPanda = thePandaSponsor.allMyPandas[0]
      expect(aPanda.myPandaSponsor).toEqual(thePandaSponsor)
      expect(aPanda.id).toBe(570)
      expect(aPanda.name).toBe('Da Mao')
	  expect(aPanda.gender).toBe('F')
	  expect(aPanda.age).toBe(20)
      expect(aPanda.location).toBe('Toronto Zoo')
    })
  })
})

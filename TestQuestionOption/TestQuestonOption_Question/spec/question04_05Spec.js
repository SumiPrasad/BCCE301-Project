/* globals describe beforeEach it expect Controller Option */
describe('Question Four and Question Five', () => {
  describe('Option', () => {
    let option
    beforeEach(() => {
      option = new Option()
    })

    it('should have a .myoptionOwner reference', () => {
      expect(option.hasOwnProperty('myQuestion')).toBeTruthy()
    })

    it('should have a .letter property', () => {
      expect(option.hasOwnProperty('letter')).toBeTruthy()
    })

    it('should have a .text property', () => {
      expect(option.hasOwnProperty('text')).toBeTruthy()
    })

    it('should have a .correct property', () => {
      expect(option.hasOwnProperty('correct')).toBeTruthy()
    })
  })

  describe('write a question.addOption function to add the options', () => {
    let theTest
    beforeEach(() => {
      let theController
      theController = new Controller()
      theTest = theController.setup()
    })

    it('Question 1 should have 4 options', () => {
      const theQuestion = theTest.findQuestion(1)
      expect(theQuestion.allMyOptions.length).toBe(4)
    })

    it('Question 2 should have 4 options', () => {
      const theQuestion = theTest.findQuestion(2)
      expect(theQuestion.allMyOptions.length).toBe(4)
    })

    it('Question 3 should have 4 options', () => {
      const theQuestion = theTest.findQuestion(3)
      expect(theQuestion.allMyOptions.length).toBe(4)
    })

    it('should correctly set option details', () => {
      let anOption
      let theQuestion

      theQuestion = theTest.findQuestion(1)
      theQuestion.sortOptions()

      anOption = theQuestion.allMyOptions[0]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('a')
      expect(anOption.text).toBe('coding')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[1]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('b')
      expect(anOption.text).toBe('programming')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[2]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('c')
      expect(anOption.text).toBe('debugging')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[3]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('d')
      expect(anOption.text).toBe('maintenance')
      expect(anOption.correct).toBe(true)

      theQuestion = theTest.findQuestion(2)
      theQuestion.sortOptions()

      anOption = theQuestion.allMyOptions[0]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('a')
      expect(anOption.text).toBe('integration')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[1]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('b')
      expect(anOption.text).toBe('problem definition')
      expect(anOption.correct).toBe(true)

      anOption = theQuestion.allMyOptions[2]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('c')
      expect(anOption.text).toBe('requirements development')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[3]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('d')
      expect(anOption.text).toBe('detailed design')
      expect(anOption.correct).toBe(false)

      theQuestion = theTest.findQuestion(3)
      theQuestion.sortOptions()

      anOption = theQuestion.allMyOptions[0]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('a')
      expect(anOption.text).toBe('detailed design')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[1]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('b')
      expect(anOption.text).toBe('integration')
      expect(anOption.correct).toBe(false)

      anOption = theQuestion.allMyOptions[2]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('c')
      expect(anOption.text).toBe('coding and debugging')
      expect(anOption.correct).toBe(true)

      anOption = theQuestion.allMyOptions[3]
      expect(anOption.myQuestion).toEqual(theQuestion)
      expect(anOption.letter).toBe('d')
      expect(anOption.text).toBe('unit testing')
      expect(anOption.correct).toBe(false)
    })
  })
})

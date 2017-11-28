/* globals describe beforeEach it expect Controller */
describe('Question Two', () => {
  describe('adding the three Questions', () => {
    let theTest
    beforeEach(() => {
      const theController = new Controller()
      theTest = theController.setup()
    })

    it('should have added three Questions', () => {
      expect(theTest.allMyQuestions.length).toBe(3)
    })

    it('should have correctly set details for each Question', () => {
      let aQuestion
      theTest.sortQuestions()

      aQuestion = theTest.allMyQuestions[0]
      expect(aQuestion).toBeDefined()
      expect(aQuestion.id).toBe(1)
      expect(aQuestion.stub).toBe('Which of the following is NOT a common term for software construction?')

      aQuestion = theTest.allMyQuestions[1]
      expect(aQuestion).toBeDefined()
      expect(aQuestion.id).toBe(2)
      expect(aQuestion.stub).toBe('Which of the following is NOT a software construction activity?')

      aQuestion = theTest.allMyQuestions[2]
      expect(aQuestion).toBeDefined()
      expect(aQuestion.id).toBe(3)
      expect(aQuestion.stub).toBe('Which of the following is the main focus of software construction?')
    })
  })
})

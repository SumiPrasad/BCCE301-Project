/* globals describe beforeEach it expect Test Question  */
describe('Basic Check For Original Source Code', () => {
  describe('Test', () => {
    let theTest
    beforeEach(() => {
      theTest = new Test()
    })

    describe('the allMyQuestions property', () => {
      it('should have an .allMyQuestions property', () => {
        expect(theTest.hasOwnProperty('allMyQuestions')).toBeTruthy()
      })
      it('should reference an array', () => {
        expect(Array.isArray(theTest.allMyQuestions)).toBeTruthy()
      })
    })

    it('should have an .addQuestion function', () => {
      expect(typeof theTest.addQuestion).toBe('function')
    })

    it('should have a .findQuestion function', () => {
      expect(typeof theTest.findQuestion).toBe('function')
    })

    it('should have a .sortQuestions function', () => {
      expect(typeof theTest.sortQuestions).toBe('function')
    })
  })

  describe('Question', () => {
    let question
    beforeEach(() => {
      question = new Question()
    })

    it('should have an .id property', () => {
      expect(question.hasOwnProperty('id')).toBeTruthy()
    })

    it('should have a .stub property', () => {
      expect(question.hasOwnProperty('stub')).toBeTruthy()
    })

    it('should have a .myTest reference', () => {
      expect(question.hasOwnProperty('myTest')).toBeTruthy()
    })

    describe('the .allMyOptions property', () => {
      it('should have an .allMyOptions reference', () => {
        expect(question.hasOwnProperty('allMyOptions')).toBeTruthy()
      })

      it('should reference an array', () => {
        expect(Array.isArray(question.allMyOptions)).toBeTruthy()
      })
    })

    it('should have a .sortOptions function', () => {
      expect(typeof question.sortOptions).toBe('function')
    })
  })
})

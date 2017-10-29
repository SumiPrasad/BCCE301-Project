/* globals describe beforeEach it expect Test Controller */
describe('Question Three', () => {
  describe('Test.getQuestions function', () => {
    let theTest
    beforeEach(() => {
      let theController
      theController = new Controller()
      theTest = theController.setup()
    })

    it('should return a string', () => {
      expect(typeof theTest.getQuestions()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theTest = new Test()
      expect(theTest.getQuestions()).toBe('')
    })

// 1. Which of the following is NOT a common term for software construction?\n2. Which of the following is NOT a software construction activity?\n3. Which of the following is the main focus of software construction?\n

    describe('should return correctly formatted data in the right order', () => {
	  describe('Should start Question Number', () => {
	  it('It should be a number', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/\d/)
  })
  })
      describe('Puncuation after Question Number', () => {
	  it('Question Number should follow a dot and single space', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/.\s/)
  })
      })
      describe('First Question', () => {
	  it('It should be "Which of the following is NOT a common term for software construction"', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sNOT\sa\scommon\sterm\sfor\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]/)
  })
      })
      describe('Second Question', () => {
	  it('It should be "Which of the following is NOT a software construction activity"', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sNOT\sa\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]\sactivity/)
  })
      })

      describe('Third Question', () => {
	  it('It should be "Which of the following is the main focus of software construction"', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sthe\smain\sfocus\sof\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]/)
  })
      })
      describe('Puncuation after each Question', () => {
	  it('It should be followed by a Question Mark (?)', () => {
    let output = theTest.getQuestions()
    expect(output).toMatch(/\?/)
  })
      })
      describe('End of each Question', () => {
        it('should end with the newline character', () => {
          expect(theTest.getQuestions()).toMatch(/\n/)
        })
      })
    })
  })
})

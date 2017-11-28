/* globals describe beforeEach it expect Test Controller */
describe('Question Seven', () => {
  describe('test.toString function', () => {
    let theTest
    beforeEach(
            () => {
              let theController
              theController = new Controller()
              theTest = theController.setup()
            }
        )

    it('should return a string', () => {
      expect(typeof theTest.toString()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theTest = new Test()
      expect(theTest.toString()).toBe('')
    })

    describe('should correctly report details of the Test', () => {
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
      describe('Punctuation before options', () => {
        it('should have four leading spaces', () => {
          expect(theTest.toString()).toMatch(/\s\s\s\s/)
        })
      })
      describe('Listing of Options', () => {
        it('Options should be listed as a,b,c,d enclosed in brackets ie (a)', () => {
          let output = theTest.toString()
          expect(output).toMatch(/\([abcd]\)/)
        })
      })
      describe('Punctuation after listing', () => {
        it('should be followed by a single space', () => {
          expect(theTest.toString()).toMatch(/\s/)
        })
      })
      describe('First Question', () => {
        it('It should be "Which of the following is NOT a common term for software construction"', () => {
          let output = theTest.getQuestions()
          expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sNOT\sa\scommon\sterm\sfor\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]/)
        })

        describe('Options for First Question', () => {
          it('should contain coding, programming, debugging and maintenance', () => {
            expect(theTest.toString()).toMatch(/(coding|programming|debugging|maintenance)/)
          })
          describe('Correct Option of First Question', () => {
            it('Should be maintenance followed by an asterisk "*"', () => {
              expect(theTest.toString()).toMatch(/(maintenance\*)/)
            })
          })
        })
      })
      describe('Second Question', () => {
        it('It should be "Which of the following is NOT a software construction activity"', () => {
          let output = theTest.getQuestions()
          expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sNOT\sa\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]\sactivity/)
        })

        describe('Options for Second Question', () => {
          it('should contain integration, problem definition, requirements development and detailed design', () => {
            expect(theTest.toString()).toMatch(/(integration|problem definition|requirements development|detailed design)/)
          })
          describe('Correct Option of Second Question', () => {
            it('Should be problem definition followed by an asterisk "*"', () => {
              expect(theTest.toString()).toMatch(/(problem definition\*)/)
            })
          })
        })
      })
      describe('Third Question', () => {
        it('It should be "Which of the following is the main focus of software construction"', () => {
          let output = theTest.getQuestions()
          expect(output).toMatch(/[W]+[a-z]+[h$]\sof\sthe\s[f]+[a-z]+[g$]\sis\sthe\smain\sfocus\sof\s[s]+[a-z]+[e$]\s[c]+[a-z]+[n$]/)
        })

        describe('Options for Third Question', () => {
          it('should contain detailed design integration coding and debugging and unit testing', () => {
            expect(theTest.toString()).toMatch(/(detailed design|integration|coding and debugging|unit testing)/)
          })
          describe('Correct Option of Third Question', () => {
            it('Should be coding and debugging followed by an asterisk "*"', () => {
              expect(theTest.toString()).toMatch(/(coding and debugging\*)/)
            })
          })
        })
      })
    })
  })
})

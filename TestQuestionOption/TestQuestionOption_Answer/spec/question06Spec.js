/* globals describe beforeEach it expect Option */
describe('Question Six', () => {
  describe('Option.isCorrect function', () => {
    let anOption
    beforeEach(() => {
      anOption = new Option()
    })

    it('should exist', () => {
      expect(anOption.isCorrect).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof anOption.isCorrect()).toBe('boolean')
    })

    it('should return true if the .correct property is equal true.', () => {
      anOption = new Option('a', 'coding', true)
      expect(anOption.isCorrect()).toBe(true)
    })

    it('should return false if the .correct property is false.', () => {
      anOption = new Option('a', 'coding', false)
      expect(anOption.isCorrect()).toBe(false)
    })
  })
})

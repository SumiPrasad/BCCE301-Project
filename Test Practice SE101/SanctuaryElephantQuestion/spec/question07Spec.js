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

    it('should correctly report details of FishOwner who has 2 fishes in order', () => {
      expect(theSanctuary.getThoseWithTwoElephants()).toBe('Joby, Thomas. <JOT>\n    Black African bush (M) has 12ft\n    Greyish Brown Asian (M) has 11ft\n')
    })
  })
})
/* global describe beforeEach  it expect Branch BranchOwner */
describe('Question Six', () => {
  describe('BranchOwner.hasTwoBranches function', () => {
    let aBranchOwner, aBranch
    beforeEach(() => {
      aBranchOwner = new BranchOwner()
      aBranch = new Branch()
    })

    it('should exist', () => {
      expect(aBranchOwner.hasTwoBranches).toBeDefined()
    })

    it('should return a boolean', () => {
      expect(typeof aBranchOwner.hasTwoBranches()).toBe('boolean')
    })

    it('should return true if the number of Branch that BranchOwner has is equal two.', () => {
      aBranchOwner = new BranchOwner('tao', null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      expect(aBranchOwner.hasTwoBranches()).toBe(true)
    })

    it('should return false if the number of Branch that BranchOwner has is less than two.', () => {
      aBranchOwner = new BranchOwner('tao', null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      expect(aBranchOwner.hasTwoBranches()).toBe(false)
    })

    it('should return false if the number of Branch that BranchOwner owns is more than two.', () => {
      aBranchOwner = new BranchOwner('tao', null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      aBranch = aBranchOwner.addBranch(null, null, null, null)
      expect(aBranchOwner.hasTwoBranches()).toBe(false)
    })
  })
})

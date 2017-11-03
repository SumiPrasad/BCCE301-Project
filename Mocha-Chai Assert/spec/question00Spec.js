describe("Basic Check For Original Source Code", () => {
    describe("ChocolateFactory", () => {
        let theChocolateFactory;
        beforeEach(() => {
            theChocolateFactory = new ChocolateFactory()
        })

        describe("the allMyBranchOwners property", () => {
            it("should have an .allMyBranchOwners property", () => {
                assert.isOk(theChocolateFactory.hasOwnProperty('allMyBranchOwners'))
            })
            it("should reference an array", () => {
                assert.isArray(theChocolateFactory.allMyBranchOwners)
            })
        })

        it("should have an .addBranchOwner function", () => {
            assert.isFunction(theChocolateFactory.addBranchOwner)
        })

        it("should have a .findBranchOwner function", () => {
            assert.isFunction(theChocolateFactory.findBranchOwner)
        })

        it("should have a .sortBranchOwners function", () => {
            assert.isFunction(theChocolateFactory.sortBranchOwners)
        })
    })

   describe("BranchOwner", () => {
        let theBranchOwner;
        beforeEach(() => {
            theBranchOwner = new BranchOwner()
        })

        it("should have an .id property", () => {
            assert.isOk(theBranchOwner.hasOwnProperty('id'))
			//assert.property(theBranchOwner('id'))
        })

        it("should have a .firstName property", () => {
            assert.isOk(theBranchOwner.hasOwnProperty('firstName'))
        })

        it("should have a .lastName property", () => {
            assert.isOk(theBranchOwner.hasOwnProperty('lastName'))
        })

        it("should have an .gender property", () => {
            assert.isOk(theBranchOwner.hasOwnProperty('gender'))
        })

        describe("the allMyBraches property", () => {
            it("should have an .allMyBranches reference", () => {
                assert.isOk(theBranchOwner.hasOwnProperty('allMyBranches'))
            })

            it("should reference an array", () => {
                assert.isArray(theBranchOwner.allMyBranches)
            })
        })

        it("should have a .sortBranchs function", () => {
            assert.isFunction( theBranchOwner.sortBranches)
        })
		
    })
})
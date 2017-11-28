/* global describe beforeEach  it expect ChocolateFactory BranchOwner */
describe("Basic Check For Original Source Code", () => {
    describe("ChocolateFactory", () => {
        let theChocolateFactory;
        beforeEach(() => {
            theChocolateFactory = new ChocolateFactory()
        })

        describe("the allMyBranchOwners property", () => {
            it("should have an .allMyBranchOwners property", () => {
               theChocolateFactory.must.have.ownProperty.allMyBranchOwners
            })
            it("should reference an array", () => {
               theChocolateFactory.allMyBranchOwners.must.be.an.array()
            })
        })

        it("should have an .addBranchOwner function", () => {
            theChocolateFactory.addBranchOwner.must.be.a.function()
        })

        it("should have a .findBranchOwner function", () => {
            theChocolateFactory.findBranchOwner.must.be.a.function()
        })

        it("should have a .sortBranchOwners function", () => {
            theChocolateFactory.sortBranchOwners.must.be.a.function()
        })
    })

   describe("BranchOwner", () => {
        let theBranchOwner;
        beforeEach(() => {
            theBranchOwner = new BranchOwner()
        })

        it("should have an .id property", () => {
            theBranchOwner.must.have.ownProperty('id')
        })

        it("should have a .firstName property", () => {
            theBranchOwner.must.have.ownProperty('firstName')
        })

        it("should have a .lastName property", () => {
            theBranchOwner.must.have.ownProperty('lastName')
        })

        it("should have an .gender property", () => {
            theBranchOwner.must.have.ownProperty('gender')
        })

        describe("the allMyBraches property", () => {
            it("should have an .allMyBranches reference", () => {
                theBranchOwner.must.have.ownProperty('allMyBranches')
            })

            it("should reference an array", () => {
                theBranchOwner.allMyBranches.must.be.an.array()
            })
        })

        it("should have a .sortBranchs function", () => {
            theBranchOwner.sortBranches.must.be.a.function()
        })
    })
})
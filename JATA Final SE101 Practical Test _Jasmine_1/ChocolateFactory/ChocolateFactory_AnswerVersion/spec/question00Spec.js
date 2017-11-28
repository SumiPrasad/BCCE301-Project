/* global describe beforeEach  it expect ChocolateFactory BranchOwner */
describe("Basic Check For Original Source Code", () => {
    describe("ChocolateFactory", () => {
        let theChocolateFactory;
        beforeEach(() => {
            theChocolateFactory = new ChocolateFactory()
        })

        describe("the allMyBranchOwners property", () => {
            it("should have an .allMyBranchOwners property", () => {
                expect(theChocolateFactory.hasOwnProperty('allMyBranchOwners')).toBeTruthy()
            })
            it("should reference an array", () => {
                expect(Array.isArray(theChocolateFactory.allMyBranchOwners)).toBeTruthy()
            })
        })

        it("should have an .addBranchOwner function", () => {
            expect(typeof theChocolateFactory.addBranchOwner).toBe('function')
        })

        it("should have a .findBranchOwner function", () => {
            expect(typeof theChocolateFactory.findBranchOwner).toBe('function')
        })

        it("should have a .sortBranchOwners function", () => {
            expect(typeof theChocolateFactory.sortBranchOwners).toBe('function')
        })
    })

   describe("BranchOwner", () => {
        let theBranchOwner;
        beforeEach(() => {
            theBranchOwner = new BranchOwner()
        })

        it("should have an .id property", () => {
            expect(theBranchOwner.hasOwnProperty('id')).toBeTruthy()
        })

        it("should have a .firstName property", () => {
            expect(theBranchOwner.hasOwnProperty('firstName')).toBeTruthy()
        })

        it("should have a .lastName property", () => {
            expect(theBranchOwner.hasOwnProperty('lastName')).toBeTruthy()
        })

        it("should have an .gender property", () => {
            expect(theBranchOwner.hasOwnProperty('gender')).toBeTruthy()
        })

        describe("the allMyBraches property", () => {
            it("should have an .allMyBranches reference", () => {
                expect(theBranchOwner.hasOwnProperty('allMyBranches')).toBeTruthy()
            })

            it("should reference an array", () => {
                expect(Array.isArray(theBranchOwner.allMyBranches)).toBeTruthy()
            })
        })

        it("should have a .sortBranchs function", () => {
            expect(typeof theBranchOwner.sortBranches).toBe('function')
        })
    })
})
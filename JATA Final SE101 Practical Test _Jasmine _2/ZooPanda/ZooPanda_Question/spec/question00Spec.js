/* global describe beforeEach  it expect Zoo PandaSponsor */
describe("Basic Check For Original Source Code", () => {
    describe("Zoo", () => {
        let theZoo;
        beforeEach(() => {
            theZoo = new Zoo()
        })

        describe("the allMyPandaSponsors property", () => {
            it("should have an .allMyPandaSponsors property", () => {
                expect(theZoo.hasOwnProperty('allMyPandaSponsors')).toBeTruthy()
            })
           /* it("should reference an array", () => {
                expect(Array.isArray(theZoo.allMyPandaOwners)).toBeTruthy()
            })*/
        })

        it("should have an .addPandaSponsor function", () => {
            expect(typeof theZoo.addPandaSponsor).toBe('function')
        })

        it("should have a .findPandaSponsor function", () => {
            expect(typeof theZoo.findPandaSponsor).toBe('function')
        })

        it("should have a .sortPandaSponsors function", () => {
            expect(typeof theZoo.sortPandaSponsors).toBe('function')
        })
    })

   describe("PandaSponsor", () => {
        let thePandaSponsor;
        beforeEach(() => {
            thePandaSponsor = new PandaSponsor()
        })

        it("should have an .id property", () => {
            expect(thePandaSponsor.hasOwnProperty('id')).toBeTruthy()
        })

        it("should have a .firstName property", () => {
            expect(thePandaSponsor.hasOwnProperty('firstName')).toBeTruthy()
        })

        it("should have a .lastName property", () => {
            expect(thePandaSponsor.hasOwnProperty('lastName')).toBeTruthy()
        })

        it("should have an .gender property", () => {
            expect(thePandaSponsor.hasOwnProperty('gender')).toBeTruthy()
        })

        describe("the allMyPandas property", () => {
            it("should have an .allMyPandas reference", () => {
                expect(thePandaSponsor.hasOwnProperty('allMyPandas')).toBeTruthy()
            })

            it("should reference an array", () => {
                expect(Array.isArray(thePandaSponsor.allMyPandas)).toBeTruthy()
            })
        })

        it("should have a .sortPandas function", () => {
            expect(typeof thePandaSponsor.sortPandas).toBe('function')
        })
    })
})
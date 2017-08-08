describe("Question Three", () => {
    describe("Sanctuary.getElephantOwners function", () => {
        let theSanctuary
        beforeEach(() => {
            theSanctuary = Controller.setup()
        })

        it("should return a string", () => {
            expect(typeof theSanctuary.getElephantOwners()).toBe('string')
        })

        it("should NOT be hard coded", () => {
            theSanctuary = new Sanctuary()
            expect(theSanctuary.getElephantOwners()).toBe('')
        })

        it("should return correctly formatted data in the right order", () => {
            expect(theSanctuary.getElephantOwners()).toBe('Adam, Taylor. <ATR>\nJoby, Thomas. <JOT>\nRobert, William. <RWM>\nTania, Paul. <TPL>\n')
        })
    })
})
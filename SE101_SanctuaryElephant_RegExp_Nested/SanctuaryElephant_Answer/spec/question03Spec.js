/* globals describe beforeEach  it expect Controller Sanctuary */
describe('Question Three', () => {
    describe('Sanctuary.getElephantOwners function', () => {
        let theSanctuary
        beforeEach(() => {
            theSanctuary = Controller.setup()
        })

        it('should return a string', () => {
            expect(typeof theSanctuary.getElephantOwners()).toBe('string')
        })

        it('should NOT be hard coded', () => {
            theSanctuary = new Sanctuary()
            expect(theSanctuary.getElephantOwners()).toBe('')
        })

        //'Adam, Taylor. [ATR]\nJoby, Thomas. [JOT]\nRobert, William. [RWM]\nTania, Paul. [TPL]\n')

        describe('Should return correctly formatted data', () => {
            describe('Check first character of FirstName', () => {
                it('First character of First name should be in [A,J,R,T]', () => {
                    expect(theSanctuary.getElephantOwners()).toMatch(/^[AJRT](.{3,5})/)
                })

                describe('Check space and comma', () => {
                    it('First name should be followed by a comma and space', () => {
                        expect(theSanctuary.getElephantOwners()).toMatch(/[,\s)]/)
                    })

                    describe('Check first character of LastName', () => {
                        it('First character of LastName should be in [TWP]', () => {
                            let anElephantOwner
                            anElephantOwner = theSanctuary.getElephantOwners()
                            anElephantOwner = theSanctuary.allMyElephantOwners[0, 1, 2, 3]
                            expect(anElephantOwner.lastName).toMatch(/^[TWP](.{3,6})/)
                        })

                        describe('Check dot and comma', () => {
                            it('Second name should be followed by a dot and space', () => {
                                expect(theSanctuary.getElephantOwners()).toMatch(/[\.\s]/)
                            })
                            describe('Check length of character id and bracket', () => {
                                it('Should have three character id enclosed in []', () => {
                                    expect(theSanctuary.getElephantOwners()).toMatch(/\[\w{3}\]/)
                                })

                                describe('Check newline', () => {
                                    it('Should have a newline', () => {
                                        expect(theSanctuary.getElephantOwners()).toMatch(/\n/)
                                    })
                                })
                            })
                        })
                    })
                })

            })
        })
    })
})
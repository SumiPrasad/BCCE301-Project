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
        describe('Should return correctly formatted data', () => {
            //Joby, Thomas. <JOT>\n	Black African bush (M) has 12ft\n	Greyish Brown Asian (M) has 11ft\n

            describe('Check FirstName', () => {
                it('Should have first name Joby', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(^[J][^A-Z]{3})/)
                })
            })

            describe('Check space and comma', () => {
                it('First name should be followed by a comma and space', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[,\s)]/)
                })
            })

            describe('Check SecondName', () => {
                it('Should have second name Thomas ', () => {
                    let anElephantOwner
                    anElephantOwner = theSanctuary.getThoseWithTwoElephants()
                    anElephantOwner = theSanctuary.allMyElephantOwners[1]
                    expect(anElephantOwner.lastName).toMatch(/(^[T][^A-Z]{5})/)

                })
            })
            describe('Check space and dot', () => {
                it('Second name should be followed by a dot and space', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/[\.\s]/)
                })
            })

            describe('Check id and bracket', () => {
                it('Should have JOT enclosed in []', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\[\w{3}\]/)
                })
            })

            describe('Check newline', () => {
                it('Should have a newline', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\n/)
                })
            })

            describe('Check tab', () => {
                it('Should have a tab', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\t/)
                })
            })

            describe('Check Species', () => {
                it('Should have Black African bush ', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(Black\sAfrican\sbush)/)
                })
            })

            describe('Check Gender', () => {
                it('Should have (M)', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(\s)+(\(\w\))+(\s)/)
                })
            })
            describe('Check Height', () => {
                it('Should have a "has 12ft"', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/has 12ft/)
                })
            })
            describe('Check tab', () => {
                it('Should have a tab', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\t/)
                })
            })
            describe('Check Species', () => {
                it('Should have Greyish Brown Asian ', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/Greyish\sBrown\sAsian/)
                })
            })
            describe('Check Gender', () => {
                it('Should have (M)', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(\s)+(\(\w\))+(\s)/)
                })
            })
            describe('Check Height', () => {
                it('Should have a "has 11ft"', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/has 11ft/)
                })
            })
            describe('Check newline', () => {
                it('Should have a newline', () => {
                    expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/\n/)

                })
            })

        })
    })
})
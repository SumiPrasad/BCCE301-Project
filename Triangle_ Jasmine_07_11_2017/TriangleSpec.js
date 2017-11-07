/* globals describe beforeEach  it expect  Triangle */
describe('Triangle Test', () => {
    let theTriangle
    beforeEach(() => {
        theTriangle = new Triangle()
    })
    describe('A. Triangle.setSides function', () => {
        it('Should be defined', () => {
            expect(theTriangle.setSides).toBeDefined()
        })

        it('Should have numbers as parameters', () => {
            expect(theTriangle.setSides()).not.toBeNaN()
        })
    })
    describe('B. Invalid Triangle Tests', () => {

        describe('1. Detecting triangle with side value zero', () => {

            describe('Triangle with sides (0,3,2) ie, first side zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 3, 2)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides (2,0,1) ie, second side zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(2, 0, 1)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(4,5,0) ie, third side zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(4, 5, 0)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(0,0,5) ie, first and second sides zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 0, 5)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })

            describe('Triangle with sides(0,6,0) ie, first and third sides zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 6, 0)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(7,0,0) ie, second and third sides zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(7, 0, 0)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(0,0,0) ie, All sides zero', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(0, 0, 0)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
        })
        describe('2. Detecting triangle with side value negative', () => {

            describe('Triangle with sides(-2,3,4) ie, first side negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(-2, 3, 4)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(6,-7,8) ie, second side negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(6, -8, 7)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })

            describe('Triangle with sides(4,5,-6) ie, third side negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(4, 5, -6)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(-11,-12,14) ie, first and second sides negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(-11, -12, 14)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(5,-6,-7) ie, second and third sides negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(5, -6, -7)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(-1,3,-2) ie, first and third sides negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(-1, 3, -2)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })

            describe('Triangle with sides(-1,-2,-3) ie, All sides negative', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(-1, -2, -3)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
        })
        describe('3. Detecting triangle with side value non integer', () => {
            describe('Triangle with sides(a,1,2) ie, first side non integer', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides('a', 1, 2)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(1,b,2) ie, second side non integer', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(1, 'b', 2)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
            describe('Triangle with sides(2,1,c) ie, second side non integer', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(2, 1, 'c')
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
        })
        describe('4. Detecting triangle with wrong number of sides', () => {
            describe('Triangle with sides(5,5) , ie, two sides', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(5, 5)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })

            describe('Triangle with sides(4,5,1,6) , ie, four sides', () => {
                it('should be invalid', () => {
                    let aTriangle = theTriangle.setSides(4, 5, 1, 6)
                    expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                })
            })
        })
        describe('5. Checking the sum of sides', () => {

            describe('Sum of two sides equal to third side', () => {

                describe('Triangle with sides(1,2,3) ie, sum of  first two sides equal to third side', () => {
                    it('should be invalid', () => {
                        let aTriangle = theTriangle.setSides(1, 2, 3)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
                describe('Triangle with sides(4,8,4) ie, sum of  first and last sides equal to second side', () => {
                    it('should be invalid', () => {
                        let aTriangle = theTriangle.setSides(4, 8, 4)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
                describe('Triangle with sides(5,3,2) ie, sum of  last two sides equal to first side', () => {
                    it('should be invalid', () => {

                        let aTriangle = theTriangle.setSides(5, 3, 2)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
            })
            describe('Sum of two sides less than third side', () => {

                describe('Triangle with sides(1,4,2) ie, sum of first and third sides less than second side', () => {
                    it('should be invalid', () => {
                        let aTriangle = theTriangle.setSides(1, 4, 2)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
                describe('Triangle with sides(3,2,8) ie, sum of first two sides less than third side', () => {
                    it('should be invalid', () => {

                        let aTriangle = theTriangle.setSides(3, 2, 8)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
                describe('Triangle with sides(15,8,3) ie, sum of last two sides less than first side', () => {
                    it('should be invalid', () => {

                        let aTriangle = theTriangle.setSides(15, 8, 3)
                        expect(theTriangle.result).toEqual('The inputs belong to invalid range')
                    })
                })
            })
        })
    })
    describe('C. Valid Triangle Tests', () => {

        describe('1. Detecting an Equilateral Triangle', () => {
            describe('A Triangle with sides (5,5,5) ie, All sides equal', () => {
                it('should be Equilateral ', () => {
                    let aTriangle = theTriangle.setSides(5, 5, 5)
                    expect(theTriangle.result).toEqual('EQUILATERAL')
                })
            })

            describe('A Triangle with sides (1,2,3) ie, All sides different', () => {
                it('should not be  Equilateral ', () => {
                    let aTriangle = theTriangle.setSides(1, 2, 3)
                    expect(theTriangle.result).not.toEqual('EQUILATERAL')
                })
            })
        })
        describe('2. Detecting an Isosceles Triangle', () => {
            describe('A Triangle with sides (5,5,4) ie, First and Second sides equal', () => {
                it('should be Isosceles ', () => {
                    let aTriangle = theTriangle.setSides(5, 5, 4)
                    expect(theTriangle.result).toEqual('ISOSCELES')
                })
            })
            describe('A Triangle with sides (6,5,6) ie, First and Third sides equal', () => {
                it('should be Isosceles', () => {
                    let aTriangle = theTriangle.setSides(6, 5, 6)
                    expect(theTriangle.result).toEqual('ISOSCELES')
                })
            })
            describe('A Triangle with sides (8,7,7) ie, Second and Third sides equal', () => {
                it('should be Isosceles', () => {
                    let aTriangle = theTriangle.setSides(8, 7, 7)
                    expect(theTriangle.result).toEqual('ISOSCELES')
                })
            })
        })
        describe('3. Detecting a Scalene Triangle', () => {
            describe('A Triangle with sides (2,3,4), ie, All sides different', () => {
                it('should be Scalene ', () => {
                    let aTriangle = theTriangle.setSides(2, 3, 4)
                    expect(theTriangle.result).toEqual('SCALENE')
                })
            })
        })
		
		// Failing Tests
        describe('4. Detecting an Acute Triangle ', () => {

            describe('A Triangle with sides (15,22,25) ', () => { // 15*15 + 22*22 > 25*25
                it('should be Actute  ', () => {
                    let aTriangle = theTriangle.setSides(15, 22, 25)
                    expect(theTriangle.result).toEqual('Acute')
                })
            })
        })
        describe('5. Detecting an Obtuse Triangle ', () => {
            describe('A Triangle with sides (8,15,20) ', () => { // 8*8 + 15*15 < 20*20
                it('should be Obtuse  ', () => {
                    let aTriangle = theTriangle.setSides(8, 15, 20)
                    expect(theTriangle.result).toEqual('Obtuse')
                })
            })
        })
        describe('6. Detecting a Right Angled Triangle ', () => {
            describe('A Triangle with sides (12,35,37) ', () => { // 15*15 + 22*22 = 25*25
                it('should be Right Angled  ', () => {
                    let aTriangle = theTriangle.setSides(12, 35, 37)
                    expect(theTriangle.result).toEqual('Right Angled')
                })
            })
        })
    })
})
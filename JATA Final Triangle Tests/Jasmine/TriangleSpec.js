/* globals describe beforeEach  it expect  Triangle */
describe('Triangle Test', () => {
  let theTriangle
  beforeEach(() => {
    theTriangle =  new Triangle()
  })
  describe('Triangle.setSides function', () => {
    it('Should be defined', () => {
      expect(theTriangle.setSides).toBeDefined()
    })

    it('Should have numbers as parameters', () => {
      expect(typeof theTriangle.setSides()).not.toBe('string')
    })
  })
  describe('Invalid Triangle Tests', () => {
    describe('Detecting triangle with zero side value', () => {
      describe('Triangle with sides (0,3,2) ie, first side zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(0, 3, 2)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides (2,0,1) ie, second side zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(2, 0, 1)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(4,5,0) ie, third side zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(4, 5, 0)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(0,0,5) ie, first and second sides are zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(0, 0, 5)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })

      describe('Triangle with sides(0,6,0) ie, first and third sides are zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(0, 6, 0)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(7,0,0) ie, second and third sides are zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(7, 0, 0)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(0,0,0) ie, all sides are zero', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(0, 0, 0)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
    })
    describe('Detecting triangle with negative side value', () => {
      describe('Triangle with sides(-2,3,4) ie, negative  first side ', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(-2, 3, 4)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(6,-7,8) ie, negative second side ', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(6, -8, 7)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })

      describe('Triangle with sides(4,5,-6) ie, negative third side', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(4, 5, -6)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(-11,-12,14) ie, negative first and second sides', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(-11, -12, 14)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(5,-6,-7) ie, negative second and third sides', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(5, -6, -7)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(-1,3,-2) ie, negative first and third sides', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(-1, 3, -2)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })

      describe('Triangle with sides(-1,-2,-3) ie, all sides are negative', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(-1, -2, -3)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
    })
    describe('Detecting triangle with side, which is not a number', () => {
      describe('Triangle with sides(a,1,2) ie, first side  is not a number', () => {
        it('should be Invalid', () => {
          theTriangle.setSides('a', 1, 2)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(1,b,2) ie, second side is not a number', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(1, 'b', 2)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
      describe('Triangle with sides(2,1,c) ie, third side is not a number', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(2, 1, 'c')
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
    })
    describe('Detecting triangle with wrong number of sides', () => {
      describe('Triangle with sides(5,5) ie, with two sides', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(5, 5)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })

      describe('Triangle with sides(4,5,1,6) ie, with four sides', () => {
        it('should be Invalid', () => {
          theTriangle.setSides(4, 5, 1, 6)
          expect(theTriangle.result).toEqual('INVALID')
        })
      })
    })
    describe('Checking the sum of the sides', () => {
      describe('Sum of the two sides equal to the third side', () => {
        describe('Triangle with sides(1,2,3) ie, sum of the first two sides equal to the third side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(1, 2, 3)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })
        describe('Triangle with sides(4,8,4) ie, sum of the first and last sides equal to the second side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(4, 8, 4)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })
        describe('Triangle with sides(5,3,2) ie, sum of the last two sides equal to the first side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(5, 3, 2)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })
      })
      describe('Sum of the two sides less than the third side', () => {
        describe('Triangle with sides(3,2,8) ie, sum of the first two sides less than the  third side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(3, 2, 8)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })

        describe('Triangle with sides(1,4,2) ie, sum of the first and third sides less than the second side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(1, 4, 2)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })

        describe('Triangle with sides(15,8,3) ie, sum of the last two sides less than the first side', () => {
          it('should be Invalid', () => {
            theTriangle.setSides(15, 8, 3)
            expect(theTriangle.result).toEqual('INVALID')
          })
        })
      })
    })
  })
  describe('Valid Triangle Tests', () => {
    describe('Detecting an Equilateral Triangle', () => {
      describe('A Triangle with sides (5,5,5) ie, all sides are equal', () => {
        it('should be Equilateral ', () => {
          theTriangle.setSides(5, 5, 5)
          expect(theTriangle.result).toEqual('EQUILATERAL')
        })
      })

      describe('A Triangle with sides (1,2,3) ie, all sides are different', () => {
        it('should not be  Equilateral ', () => {
          theTriangle.setSides(1, 2, 3)
          expect(theTriangle.result).not.toEqual('EQUILATERAL')
        })
      })
    })
    describe('Detecting an Isosceles Triangle', () => {
      describe('A Triangle with sides (5,5,4) ie, first and second sides are equal', () => {
        it('should be Isosceles ', () => {
          theTriangle.setSides(5, 5, 4)
          expect(theTriangle.result).toEqual('ISOSCELES')
        })
      })
      describe('A Triangle with sides (6,5,6) ie, first and third sides are equal', () => {
        it('should be Isosceles', () => {
          theTriangle.setSides(6, 5, 6)
          expect(theTriangle.result).toEqual('ISOSCELES')
        })
      })
      describe('A Triangle with sides (8,7,7) ie, second and third sides are equal', () => {
        it('should be Isosceles', () => {
          theTriangle.setSides(8, 7, 7)
          expect(theTriangle.result).toEqual('ISOSCELES')
        })
      })
    })
    describe('Detecting a Scalene Triangle', () => {
      describe('A Triangle with sides (2,3,4), ie, all sides are different', () => {
        it('should be Scalene ', () => {
          theTriangle.setSides(2, 3, 4)
          expect(theTriangle.result).toEqual('SCALENE')
        })
      })
    })

// Failing Tests
    describe('Detecting an Acute Triangle ', () => {
      describe('A Triangle with sides (15,22,25) ', () => { // 15*15 + 22*22 > 25*25
        it('should be Actute  ', () => {
          theTriangle.setSides(15, 22, 25)
          expect(theTriangle.result).toEqual('ACUTE')
        })
      })
    })
    describe('Detecting an Obtuse Triangle ', () => {
      describe('A Triangle with sides (8,15,20) ', () => { // 8*8 + 15*15 < 20*20
        it('should be Obtuse  ', () => {
          theTriangle.setSides(8, 15, 20)
          expect(theTriangle.result).toEqual('OBTUSE')
        })
      })
    })
    describe('Detecting a Right Angled Triangle ', () => {
      describe('A Triangle with sides (12,35,37) ', () => { // 15*15 + 22*22 = 25*25
        it('should be Right Angled  ', () => {
          theTriangle.setSides(12, 35, 37)
          expect(theTriangle.result).toEqual('RIGHT ANGLED')
        })
      })
    })
  })
})

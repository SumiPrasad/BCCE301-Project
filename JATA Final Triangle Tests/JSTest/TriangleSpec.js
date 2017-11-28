JS.Test.describe('Triangle Test', function() {
    with(this) {

        before(function() {
            with(this) {
                this.theTriangle = new Triangle()
            }
        })
        describe('Triangle.setSides function', function() {
            with(this) {

                it('Should be a function', function() {
                    with(this) {
                        assertKindOf('function', theTriangle.setSides)
                    }
                })
                it('Should not be empty', function() {
                    with(this) {
                        assertNotNull(theTriangle.setSides)
                    }
                })
            }
        })
        describe('Invalid Triangle Tests', function() {
            with(this) {

                describe('Detecting triangle with zero side value', function() {
                    with(this) {

                        describe('Triangle with sides (0,3,2) ie, first side zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(0, 3, 2)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (2,0,1) ie, second side zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(2, 0, 1)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (4,5,0) ie, third side zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(4, 5, 0)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (0,0,5) ie, first and second sides are zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(0, 0, 5)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (0,6,0) ie, first and third sides are zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(0, 6, 0)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (7,0,0) ie, second and third sides are zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(7, 0, 0)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides (0,0,0) ie, all sides are zero', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(0, 0, 0)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                    }
                })

                describe('Detecting triangle with negative side value', function() {
                    with(this) {

                        describe('Triangle with sides(-2,3,4) ie, negative  first side ', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(-2, 3, 4)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides(6,-7,8) ie, negative  second side ', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(6, -7, 8)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides(4,5,-6) ie, negative  third side ', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(4, 5, -6)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                        describe('Triangle with sides(-11,-12,14) ie, negative first and second sides ', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(-11, -12, 14)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides(5,-6,-7) ie, negative second and third sides', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(5, -6, -7)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                        describe('Triangle with sides(-1,3,-2) ie, negative first and third sides', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(-1, 3, -2)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })
                        describe('Triangle with sides(-1,-2,-3) ie, all sides are negative', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(-1, -2, -3)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                    }
                })

                describe('Detecting triangle with side, which is not a number', function() {
                    with(this) {

                        describe('Triangle with sides(a,1,2) ie, first side is not a number', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides('a', 1, 2)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                        describe('Triangle with sides(1,b,2) ie, second side is not a number', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(1, 'b', 2)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                        describe('Triangle with sides(2,1,c) ie, third side is not a number', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(2, 1, 'c')
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })


                    }
                })
                describe('Detecting triangle with wrong number of sides', function() {
                    with(this) {
                        describe('Triangle with sides(5,5) ie, with two sides', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(5, 5)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                        describe('Triangle with sides(4,5,1,6) ie, with four sides', function() {
                            with(this) {
                                it('should be invalid ', function() {
                                    with(this) {
                                        theTriangle.setSides(4, 5, 1, 6)
                                        assertEqual(theTriangle.result, 'INVALID')
                                    }
                                })
                            }
                        })

                    }
                })
                describe('Checking the sum of the sides', function() {
                    with(this) {

                        describe('Sum of the two sides equal to the third side', function() {
                            with(this) {

                                describe('Triangle with sides(1,2,3) ie, sum of the first two sides equal to the third side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(1, 2, 3)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                                describe('Triangle with sides(4,8,4) ie, sum of the first and third sides equal to second side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(4, 8, 4)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                                describe('Triangle with sides(5,3,2) ie, sum of the  last two sides equal to the first side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(5, 2, 2)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                            }
                        })

                        describe('Sum of the two sides less than the third side', function() {
                            with(this) {

                                describe('Triangle with sides(3,2,8) ie, sum of the first two sides less than the third side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(3, 2, 8)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                                describe('Triangle with sides(1,4,2) ie, sum of the first and third sides less than the second side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(1, 4, 2)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                                describe('Triangle with sides(15,8,3) ie, sum of the last two sides less than the first side', function() {
                                    with(this) {
                                        it('should be invalid ', function() {
                                            with(this) {
                                                theTriangle.setSides(15, 8, 3)
                                                assertEqual(theTriangle.result, 'INVALID')
                                            }
                                        })
                                    }
                                })

                            }
                        })


                    }
                })

            }
        })

        describe('Valid Triangle Tests', function() {
            with(this) {

                describe('Detecting an Equilateral Triangle', function() {
                    with(this) {

                        describe('A Triangle with sides (5,5,5) ie, all sides are equal', function() {
                            with(this) {
                                it('should be Equilateral ', function() {
                                    with(this) {
                                        theTriangle.setSides(5, 5, 5)
                                        assertEqual(theTriangle.result, 'EQUILATERAL')
                                    }
                                })
                            }
                        })
                        describe('A Triangle with sides (1,2,3) ie, all sides are different', function() {
                            with(this) {
                                it('should not be Equilateral ', function() {
                                    with(this) {
                                        theTriangle.setSides(1, 2, 3)
                                        assertNotEqual(theTriangle.result, 'EQUILATERAL')
                                    }
                                })
                            }
                        })
                    }
                })
                describe('Detecting an Isosceles Triangle', function() {
                    with(this) {

                        describe('A Triangle with sides (5,5,4) ie, first and second sides are equal', function() {
                            with(this) {
                                it('should be Isosceles', function() {
                                    with(this) {
                                        theTriangle.setSides(5, 5, 4)
                                        assertEqual(theTriangle.result, 'ISOSCELES')
                                    }
                                })
                            }
                        })

                        describe('A Triangle with sides (6,5,6) ie, first and third sides are equal', function() {
                            with(this) {
                                it('should be Isosceles', function() {
                                    with(this) {
                                        theTriangle.setSides(6, 5, 6)
                                        assertEqual(theTriangle.result, 'ISOSCELES')
                                    }
                                })
                            }
                        })
                        describe('A Triangle with sides (8,7,7) ie, second and third sides are equal', function() {
                            with(this) {
                                it('should be Isosceles', function() {
                                    with(this) {
                                        theTriangle.setSides(8, 7, 7)
                                        assertEqual(theTriangle.result, 'ISOSCELES')
                                    }
                                })
                            }
                        })


                    }
                })

                describe('Detecting an Scalene Triangle', function() {
                    with(this) {

                        describe('A Triangle with sides (2,3,4) ie, all sides are different', function() {
                            with(this) {
                                it('should be Scalene', function() {
                                    with(this) {
                                        theTriangle.setSides(2, 3, 4)
                                        assertEqual(theTriangle.result, 'SCALENE')
                                    }
                                })
                            }
                        })
                    }
                })
// Failing Tests
                describe('Detecting an Acute Triangle', function() {
                    with(this) {

                        describe('A Triangle with sides (15,22,25) ', function() {
                            with(this) {
                                it('should be Acute', function() {
                                    with(this) {
                                        theTriangle.setSides(15, 22, 25)
                                        assertEqual(theTriangle.result, 'ACUTE')
                                    }
                                })
                            }
                        })
                    }
                })

                describe('Detecting an Obtuse Triangle ', function() {
                    with(this) {

                        describe('A Triangle with sides (8,15,20)', function() {
                            with(this) {
                                it('should be Obtuse', function() {
                                    with(this) {
                                        theTriangle.setSides(8, 15, 20)
                                        assertEqual(theTriangle.result, 'OBTUSE')
                                    }
                                })
                            }
                        })
                    }
                })

                describe('Detecting a Right Angled Triangle', function() {
                    with(this) {

                        describe('A Triangle with sides (12,35,37) ', function() {
                            with(this) {
                                it('should be Right Angled', function() {
                                    with(this) {
                                        theTriangle.setSides(12, 35, 37)
                                        assertEqual(theTriangle.result, 'RIGHT ANGLED')
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
/* globals describe beforeEach  it expect Controller Triangle */
describe('Triangle', () => {
  let theTriangle
  beforeEach(() => {
    theTriangle = Controller.setup()
  })
  it('should return a string', () => {
    expect(typeof theTriangle.setSides()).toBe('string')
  })

  it('equilateral triangles have equal sides', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(5, 5, 5)).toEqual('equilateral')
  })
  it('larger equilateral triangles have equal sides', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(15, 15, 15)).toEqual('equilateral')
  })
  it('isosceles triangles have last two sides equal', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(3, 4, 4)).toEqual('isosceles')
  })
  it('isosceles trianges have first and last sides equal', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(4, 3, 4)).toEqual('isosceles')
  })
  it('isosceles triangles have two first sides equal', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(4, 4, 3)).toEqual('isosceles')
  })
  it('scalene triangles have no equal sides', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(3, 4, 5)).toEqual('scalene')
  })

  it('Negative side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(-1, 4, 5)).toEqual('Invalid Triangle')
  })
  it('Zero side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(1, 4, 0)).toEqual('Invalid Triangle')
  })
  it('Sum of any two sides should be greater than the third size, if not Triangle is invalid', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(1, 2, 10)).toEqual('Invalid Triangle')
  })
})

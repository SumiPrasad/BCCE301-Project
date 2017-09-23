var expect = chai.expect;

describe('Triangle', () => {
  let theTriangle
  beforeEach(() => {
    theTriangle = Controller.setup()
  })

  it('equilateral triangles have equal sides',() => {
    theTriangle = new Triangle()
	expect(theTriangle.setSides(5, 5, 5)).to.equal('equilateral')
  })
  
  it('isosceles triangles have last two sides equal', () => {
    theTriangle = new Triangle()
	expect(theTriangle.setSides(3, 4, 4)).to.equal('isosceles')
  })
  it('isosceles trianges have first and last sides equal', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(4, 3, 4)).to.equal('isosceles')
  })
  it('isosceles triangles have two first sides equal', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(4, 4, 3)).to.equal('isosceles')
  })
  it('scalene triangles have no equal sides', () => {
    theTriangle = new Triangle()
     expect(theTriangle.setSides(3, 4, 5)).to.equal('scalene')
  })
  it('Negative side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(-1, 4, 5)).to.equal('Invalid Triangle')
  })
  it('Zero side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(1, 4, 0)).to.equal('Invalid Triangle')
  })
  it('Sum of any two sides should be greater than the third size, if not Triangle is invalid', () => {
    theTriangle = new Triangle()
    expect(theTriangle.setSides(1, 2, 10)).to.equal('Invalid Triangle')
  })
})
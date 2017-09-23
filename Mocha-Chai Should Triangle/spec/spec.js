var should = chai.should();

describe('Triangle', () => {
  let theTriangle
  beforeEach(() => {
    theTriangle = Controller.setup()
  })

  it('equilateral triangles have equal sides',() => {
    theTriangle = new Triangle()
	theTriangle.setSides(5, 5, 5).should.equal('equilateral');
  })
  
  it('isosceles triangles have last two sides equal', () => {
    theTriangle = new Triangle()
	theTriangle.setSides(3, 4, 4).should.equal('isosceles')
  })
  it('isosceles trianges have first and last sides equal', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(4, 3, 4).should.equal('isosceles')
  })
  it('isosceles triangles have two first sides equal', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(4, 4, 3).should.equal('isosceles')
  })
  it('scalene triangles have no equal sides', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(3, 4, 5).should.equal('scalene')
  })
  it('Negative side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(-1, 4, 5).should.equal('Invalid Triangle')
  })
  it('Zero side value is an Invalid Traingle', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(1, 4, 0).should.equal('Invalid Triangle')
  })
  it('Sum of any two sides should be greater than the third size, if not Triangle is invalid', () => {
    theTriangle = new Triangle()
    theTriangle.setSides(1, 2, 10).should.equal('Invalid Triangle')
  })
})
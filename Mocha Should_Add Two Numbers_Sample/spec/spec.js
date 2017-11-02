var should = chai.should();

describe('Test', () => {
  let theTest
  beforeEach(() => {
    theTest = Controller.setup()
  })
  describe("Function Check" , () => {
  it('Should define function add()',() => {
	theTest.add(2,2).should.to.not.be.undefined;
  })
  })
  describe("Input Type" , () => {
  it('Should not be a string',() => {
	theTest.add(2,2).should.not.be.a('string');
  })
  })
  
  describe("Sum of two numbers" , () => {
  it('Should be equal to 4',() => { 
	theTest.add(2,2).should.equal(4);
  })
  
  })
 
})

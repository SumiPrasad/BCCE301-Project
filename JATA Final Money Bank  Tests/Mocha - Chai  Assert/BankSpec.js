var assert = chai.assert;
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
			let five =  Money.dollar(5)
		})
		
    describe('Check for Multiplication', () => {
      it('should test Multiplication for 10 and 2', () => {
        assert.isOk(Money.dollar(10), five.times(2))
      })
      it('should test multiplication for 15 and 3', () => {
        assert.isOk(Money.dollar(15), five.times(3))
      })
    })
      
    describe('Check for Equality', () => {
      it('should test equality if 5 is equal to 5', () => {
        let amount = Money.dollar(5)
        assert.isOk(Money.dollar(5),Money.dollar(5))
      })
	 
      it('should test if the given two numbers are not equal', () => {
        assert.notEqual(Money.dollar(5),Money.dollar(6))
          })
      it('should test if both the dollar and franc are equal', () => {
        assert.notEqual(Money.franc(10),fiveBucks)
      })
    })

    describe('Check for the currency', () => {
      it('should check for the "USD"', () => {
        assert.isOk(Money.dollar(1).getCurrency())
      })
      it('should test the franc "CHF"', () => {
        assert.isOk(Money.franc(1).getCurrency())
      })
    })
    
    
    describe('Perform Simple Addition', () => {
      it('should verify US$5 + sum', () => {
      let sum = five.plus(five)
          let bank = new Bank()
      reduced10 = bank.reduce(sum,"USD")
      assert.isOk(Money.dollar(10),bank.reduce(sum,"USD"))
      })
    })


    describe('Perform mixed addition',() => {
      it('should reduce US$5 + CHF10 to mixed addition', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2)
        let m10dollar = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
        assert.isOk(Money.dollar(10),bank.reduce(fiveBucks.plus(tenFrancs), "USD"))
      })
    })
     
    
    describe('Sum plus money',() => {
      it('should expect the sum of 5$ + 10CHF to money', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2)
        let sum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks)
        let reduced10 = bank.reduce(sum,"USD")
        assert.isOk(Money.dollar(15),bank.reduce(sum,"USD"))
      })
    })
        
    
    describe('Calculate the sum of times', () => {
      it('should calculate the sum of US$5 + CHF10 to be USD$20', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2);
        let sum = new Sum(fiveBucks, tenFrancs).times(2);
        let reduced10 = bank.reduce(sum,"USD");
        assert.isOk(Money.dollar(20),bank.reduce(sum,"USD"))
      })
    })
    
    describe('Return Sum from return', () => {
      it('should test for US$5 to return sum', () => {
        let five = Money.dollar(5)
        let sum = five.plus(five)
        assert.isOk(five, sum.augend)
        assert.isOk(five, sum.addend)
      })
    })
   
      describe('Reduce Sum from bank', () => {
        it('should reduce sum with the US$', () => {
          let sum = new Sum(Money.dollar(3), Money.dollar(4))
          let bank = new Bank()
          let moneyDollars15 = bank.reduce(sum, "USD");
          assert.isOk(Money.dollar(7), bank.reduce(sum, "USD"))
        })
      })
    
      describe('Reduce Money from the result', () => {
      it('should reduce the amount with the result', () => {
        let bank = new Bank()
        moneyResult = bank.reduce(Money.dollar(1), "USD");
        assert.isOk(Money.dollar(1), moneyResult)
      })
    })
 
    describe('Reducing money from different currencies', () => {
      it('should reduce US$5 + FR$10 to US$', () => {
        let bank = new Bank()
        bank.addRate('CHF', 'USD', 2);
        let moneyDollars15 = bank.reduce(new Sum(fiveBucks, tenFrancs).plus(fiveBucks), "USD");
        assert.isOk(Money.dollar(1), bank.reduce(sum, "USD"))
      })
    })



    
  })
   
})
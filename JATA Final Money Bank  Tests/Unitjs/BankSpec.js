
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
			let five =  Money.dollar(5)
		})
		
     describe('Check for Multiplication', () => {
      it('should test Multiplication for 10 and 2', () => {
        (Money.dollar(10), five.times(2)).should.be.equal
      })
	  
	   it('should test multiplication for 15 and 3', () => {
        (Money.dollar(15), five.times(3)).should.be.equal
      })
	 })
	 
	  describe('Check for Equality', () => {
      it('should test equality if 5 is equal to 5', () => {
        //let amount = Money.dollar(5)
        (Money.dollar(5),Money.dollar(5)).should.be.equal
      })
	 
      it('should test if the given two numbers are not equal', () => {
        (Money.dollar(5),Money.dollar(6)).should.not.be.equal
          })
      it('should test if both the dollar and franc are not equal', () => {
        (Money.franc(10),fiveBucks).should.not.be.equal
      })
    }) 
	
	describe('Check for the currency', () => {
      it('should check for the "USD"', () => {
        (Money.dollar(1).getCurrency()).should.be.ok
      })
      it('should test the franc "CHF"', () => {
       (Money.franc(1).getCurrency()).should.be.ok
      })
    })
    
	 
 
    
    describe('Perform Simple Addition', () => {
      it('should verify US$5 + sum', () => {
      let sum = five.plus(five)
          let bank = new Bank()
      reduced10 = bank.reduce(sum,"USD")
    Money.dollar(10),reduced10.should.be.equal
      })
    })


    describe('Perform mixed addition',() => {
      it('should reduce US$5 + CHF10 to mixed addition', () => {
        let fiveBucks = Money.dollar(5)
        let tenFrancs = Money.franc(10)
        let bank = new Bank()
        bank.addRate("CHF","USD",2)
        let m10dollar = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
        Money.dollar(10),m10dollar.should.be.equal
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
       Money.dollar(15),reduced10.should.be.equal
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
        (Money.dollar(20),reduced10).should.be.ok
      })
    })
    
    describe('Return Sum', () => {
      it('should test for US$5 to return sum', () => {
		  
        let five = Money.dollar(5)
        let sum = five.plus(five)
		
        five, sum.should.be.equal
       
      })
    })
   
      describe('Reduce Sum from bank', () => {
        it('should reduce sum with the US$', () => {
          let sum = new Sum(Money.dollar(3), Money.dollar(4))
          let bank = new Bank()
          let moneyDollars15 = bank.reduce(sum, "USD");
          (Money.dollar(7), moneyDollars15).should.be.ok
        })
      })
    
      describe('Reduce Money from the result', () => {
      it('should reduce the amount with the result', () => {
        let bank = new Bank()
        moneyResult = bank.reduce(Money.dollar(1), "USD");
       (Money.dollar(1), moneyResult).should.be.ok
      })
    })
    
 
    describe('Reducing money from different currencies', () => {
      it('should reduce US$5 + FR$10 to US$', () => {
        let bank = new Bank()
        bank.addRate('CHF', 'USD', 2);
        let moneyDollars15 = bank.reduce(new Sum(fiveBucks, tenFrancs).plus(fiveBucks), "USD");
        (Money.dollar(1), bank.reduce(sum, "USD")).should.be.ok
      })
    })



    
  })
   
})
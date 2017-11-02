class Test {
    constructor () {
      this.result = "No valid input" 
    }
	add(a,b) {
  //add() -->failed
		return this.result = a + b;
		//return this.result = a - b; -->failed
		//return this.result = c + a; -->failed

	}
}

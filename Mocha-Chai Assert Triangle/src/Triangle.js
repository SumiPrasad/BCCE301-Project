class Triangle {
    constructor () {
      this.result = "The inputs belong to invalid range" 
    }
	setSides(a,b,c) {
		return this.result = (a === b && b === c) ? 'equilateral' : (a === b || a === c || b === c)? 'isosceles' :
		(a <=0 || b <= 0 || c <= 0 || a+b < c || b+a < c || b+c < a) ? 'Invalid Triangle' : 'scalene';
	}

}

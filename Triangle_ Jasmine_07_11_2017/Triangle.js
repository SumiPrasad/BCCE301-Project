class Triangle {
    constructor ( a, b, c ) {
        this.result = "The inputs belong to invalid range"
        this.setSides( a, b, c )
    }
    
    setSides(a,b,c) {
        let validInput = -1
        if ( (a > 0) && ( a < 100) && (b > 0) && ( b <= 100) && ( c>0) && (c <= 100) ) {
            if ( ( (a+b) > c) && ( (c+a) > b) && ( (b+c) >a )) { 
                validInput = 1;
            } 
        } 
        if ( validInput === 1 ) { 
            if ( ( a === b ) && ( b === c )) {
                 this.result = "EQUILATERAL"
            }
            else if ( ( a === b ) || ( b === c ) || ( c === a ) ) {
                this.result = "ISOSCELES"
            } 
            else {
                this.result = "SCALENE"
            } 
        }
        else if ( validInput === 0 ) { 
            this.result = "The values do not constitute a triangle"
        }
    }
}
        
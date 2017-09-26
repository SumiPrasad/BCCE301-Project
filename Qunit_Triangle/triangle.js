function setSides(a,b,c) {
		return (a === b && b === c) ? 'equilateral' : (a === b || a === c || b === c)? 'isosceles' :
		(a <=0 || b <= 0 || c <= 0 || a+b < c || b+a < c || b+c < a) ? 'Invalid Triangle' : 'scalene';
	}


const { test } = QUnit;

test( "setSides()", t => {
  t.equal( setSides( 2,2,2 ),'equilateral', "equilateral triangles have equal sides" );
  t.equal( setSides( 2,2,1 ),'isosceles', "isosceles triangles have two first sides equal" );
  t.equal( setSides( 1,2,2 ),'isosceles', "isosceles triangles have last two sides equal" );
  t.equal( setSides( 2,1,2 ),'isosceles', "isosceles trianges have first and last sides equal" );
  t.equal( setSides( 3,4,5 ),'scalene', "scalene triangles have no equal sides" );
  t.equal( setSides( -1,4,5 ),'Invalid Triangle', "Negative side value is an Invalid Traingle" );
  t.equal( setSides( 0,2,1 ),'Invalid Triangle', "Zero side value is an Invalid Traingle" );
  t.equal( setSides( 1,2,10 ),'Invalid Triangle', "Sum of any two sides should be greater than the third size, if not Triangle is invalid" );

});
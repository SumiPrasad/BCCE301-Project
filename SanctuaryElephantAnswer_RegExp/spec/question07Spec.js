/* globals describe beforeEach  it expect Controller Sanctuary */
describe('Question Seven', () => {
  describe('Sanctuary.getThoseWithTwoElephants function', () => {
    let theSanctuary
    beforeEach(
            () => {
              theSanctuary = Controller.setup()
            }
        )

    it('should return a string', () => {
      expect(typeof theSanctuary.getThoseWithTwoElephants()).toBe('string')
    })

    it('should NOT be hard coded', () => {
      theSanctuary = new Sanctuary()
      expect(theSanctuary.getThoseWithTwoElephants()).toBe('')
    })
	
	// 1
	/*
	it('compares the actual to the expected using a regular expression',() =>{
	expect(theSanctuary.getThoseWithTwoElephants()).toMatch(/(Joby)+(.)+(\s)+(Thomas)+(.)+(\s)+(<[^>]+>)+(\\n)+(\t)+(Black)+(\s)+(African)+(\s)+(bush)+(\s)+(([^)]+\)))+(\s)+(has 12ft)+(\\n)+(\t)+(Greyish Brown Asian)+(\s)+(([^)]+\)))+(\s)+(has 11ft)+(\\n)/gm);
	})
	*/
	
	
	//2
	/*
	var string = "Joby, Thomas. <JOT>\n	Black African bush (M) has 12ft\n	Greyish Brown Asian (M) has 11ft\n"
	var re = new RegExp ("/(Joby)+(.)+(\s)+(Thomas)+(.)+(\s)+(<[^>]+>)+(\\n)+(\t)+(Black)+(\s)+(African)+(\s)+(bush)+(\s)+(([^)]+\)))+(\s)+(has 12ft)+(\\n)+(\t)+(Greyish Brown Asian)+(\s)+(([^)]+\)))+(\s)+(has 11ft)+(\\n)/g")
	if (re.test(string)) {
    console.log("Valid");
   }else {
    console.log("Invalid");
	} */
	
	
	
   //3
   
   it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "Joby, Thomas. <JOT>\n	Black African bush (M) has 12ft\n	Greyish Brown Asian (M) has 11ft\n";
    expect(message).toMatch(/(Joby)+(.)+(\s)+(Thomas)+(.)+(\s)+(<[^>]+>)+(\\n)+(\t)+(Black)+(\s)+(African)+(\s)+(bush)+(\s)+(([^)]+\)))+(\s)+(has 12ft)+(\\n)+(\t)+(Greyish Brown Asian)+(\s)+(([^)]+\)))+(\s)+(has 11ft)+(\\n)/);
	});
	
	
	
  })
})


		
	/*
	correct regExp
	(Joby)+(.)+(\s)+(Thomas)+(.)+(\s)+(<[^>]+>)+(\\n)+(\t)+(Black)+(\s)+(African)+(\s)+(bush)+(\s)+(([^)]+\)))+(\s)+(has 12ft)+(\\n)+(\t)+(Greyish Brown Asian)+(\s)+(([^)]+\)))+(\s)+(has 11ft)+(\\n)
	*/
 
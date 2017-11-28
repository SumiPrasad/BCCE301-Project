class Controller {
	setup  () {
		/*
		1.	Which of the following is NOT a common term for software construction? 
		2.	Which of the following is NOT a software construction activity?
		3.	Which of the following is the main focus of software construction? 
		*/
		// ADD CODE HERE TO CREATE THE QUESTIONS
		var theTest;

		theTest = new Test()
		theTest.addQuestion( 1, 'Which of the following is NOT a common term for software construction?' )
		theTest.addQuestion( 2,	'Which of the following is NOT a software construction activity?' )
		theTest.addQuestion( 3,	'Which of the following is the main focus of software construction?' )
		
		
		//ADD CODE HERE TO CREATE THE OPTIONS FOR EACH QUESTION
		/*
		1.	Which of the following is NOT a common term for software construction? 
		a)	coding
		b)	programming
		c)	debugging
		d)	maintenance*

		2.	Which of the following is NOT a software construction activity?
		a)	integration
		b)	problem definition*
		c)	requirements development
		d)	detailed design

		3.	Which of the following is the main focus of software construction? 
		a)	detailed design
		b)	integration
		c)	coding and debuging*
		d)	unit testing
		*/

		var theQuestion
		theQuestion = theTest.findQuestion( 1 )
		theQuestion.addOption( 'a', 'coding', false )
		theQuestion.addOption( 'b', 'programming', false )
		theQuestion.addOption( 'c', 'debugging', false )
		theQuestion.addOption( 'd', 'maintenance', true )
		
		theQuestion = theTest.findQuestion( 2 )
		theQuestion.addOption( 'a', 'integration', false )
		theQuestion.addOption( 'b', 'problem definition', true )
		theQuestion.addOption( 'c', 'requirements development', false )
		theQuestion.addOption( 'd', 'detailed design', false )
		
		
		theQuestion = theTest.findQuestion( 3 )
		theQuestion.addOption( 'a', 'detailed design', false )
		theQuestion.addOption( 'b', 'integration', false )
		theQuestion.addOption( 'c', 'coding and debugging', true )
		theQuestion.addOption( 'd', 'unit testing', false )
		

			
			
			
		return theTest
	}
}

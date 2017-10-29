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


		   

			
			
			
		return theTest
	}
}

class Controller {
	static setup  () {
		var theChocolateFactory
		theChocolateFactory = new ChocolateFactory()
		 /*
		  ID      First Name       Last Name   Gender
		  01     Rachel           Choi          F
		  03     Donald           Rai           M
		  02     Seunghyun        Trump         M
		  04     Aishwarya        Hunter        F
		 */
		// Add the branch owners here

		theChocolateFactory.addBranchOwner('01', 'Rachel', 'Choi', 'F')
		theChocolateFactory.addBranchOwner('03', 'Donald', 'Rai', 'M')
		theChocolateFactory.addBranchOwner('04', 'Aishwarya', 'Trump', 'F')
		theChocolateFactory.addBranchOwner('02', 'Seunghyun', 'Hunter', 'M')   
	  

		/*
		01    401     Mike's Chocolate Shop      Krakatoa Island    27-2-2011
		01    402     Cacao Bean                 Mt. Everest        12-8-2015
		03    389     The Hot Chocolate Shoppe   Sahara Desert      31-3-2013
		02    113     Chocolate Therapy          Amazon Rainforest  24-10-2004
		04    114     Arriba Chocolate           Siberia            4-3-2009
		04    121     The Cacao Walk             Gobi Desert        1-6-2014
		*/	  
		//Add the branches here
		var theBranchOwner
		theBranchOwner = theChocolateFactory.findBranchOwner('01')
		theBranchOwner.addBranch(401, "Mike's Chocolate Shop", 'Krakatoa Island', new Date(2011, 1,27))
		theBranchOwner.addBranch(402, 'Cacao Bean', 'Mt. Everest', new Date(2015, 7, 12))
		theBranchOwner = theChocolateFactory.findBranchOwner('03')
		theBranchOwner.addBranch(389, 'The Hot Chocolate Shoppe', 'Sahara Desert',  new Date(2013, 2, 31))
	  
		theBranchOwner = theChocolateFactory.findBranchOwner('02')
		theBranchOwner.addBranch(113, 'Chocolate Therapy', 'Amazon Rainforest',  new Date(2004, 9, 24))
		theBranchOwner = theChocolateFactory.findBranchOwner('04')
		theBranchOwner.addBranch(114, 'Arriba Chocolate', 'Siberia',  new Date(2009, 2, 4)) 
		theBranchOwner.addBranch(121, 'The Cacao Walk', 'Gobi Desert',  new Date(2014, 5, 1)) 
	   
		return theChocolateFactory
	}
}
class Controller { 
  static setup () {
    let theZoo, thePandaSponsor
    theZoo = new Zoo()
    // ADD CODE HERE TO CREATE THE PANDASPONSORS

    /*
    ID   First Name     Last Name  Gender
    01  June           Gardiner     F
    03  Meryl          Henry        F  
    02  Maurice        Cook         M 
    04  William        Cambell      M 
    */
  
	theZoo.addPandaSponsor ('01','June','Gardiner','F')
	theZoo.addPandaSponsor ('03','Meryl','Henry','F')
	theZoo.addPandaSponsor ('02','Maurice','Cook','M')
	theZoo.addPandaSponsor ('04','William','Cambell','M')
    
	
	  // ADD CODE HERE TO CREATE THE PANDA
    /*
    PandaSponsor ID		PandaID		Name			Gender			Age			Location
	01					100			Bai Yun			F		 		4			San Diego Zoo
	01					110			Bao Bao			F		 		16			National Zoo China
	02					450			Gu Gu			M		 		10			Beijing Zoo
	03					320			Po				M              	5           Zoo Atlanta
	04                  570			Da Mao          F              	20          Toronto Zoo

    */
    thePandaSponsor = theZoo.findPandaSponsor('01')
    thePandaSponsor.addPanda(100,'Bai Yun', 'F',4, 'San Diego Zoo')
    thePandaSponsor.addPanda(110,'Bao Bao', 'F',16, 'National Zoo China')
	
    thePandaSponsor = theZoo.findPandaSponsor('02')
    thePandaSponsor.addPanda(450,'Gu Gu', 'M',10, 'Beijing Zoo')
	
	thePandaSponsor = theZoo.findPandaSponsor('03')
    thePandaSponsor.addPanda(320,'Po', 'M',5, 'Zoo Atlanta')
	
	thePandaSponsor = theZoo.findPandaSponsor('04')
    thePandaSponsor.addPanda(570,'Da Mao', 'F',20, 'Toronto Zoo')  
    
    return theZoo
  }
}

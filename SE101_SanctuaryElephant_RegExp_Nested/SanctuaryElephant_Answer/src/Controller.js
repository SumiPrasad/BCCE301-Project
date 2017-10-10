class Controller {

	static setup () {
		let theSanctuary, theElephantOwner;
		theSanctuary = new Sanctuary();
		// ADD CODE HERE TO CREATE THE ELEPHANTOWNERS

		/*
		ID	First Name	Last Name		Birth Date
		JOT    Joby        	Thomas     09/04/1990
		ATR    Adam        	Taylor	   07/09/1980
		RWM    Robert       William	   31/07/1986
		TPL    Tania     	Paul	   02/08/1995
		*/
		theSanctuary.addElephantOwner('JOT', 'Joby', 'Thomas', new Date(1990, 4, 9) )
		theSanctuary.addElephantOwner('ATR', 'Adam', 'Taylor', new Date(1980, 9, 7) )
		theSanctuary.addElephantOwner('RWM', 'Robert', 'William', new Date(1986, 7, 31) )
		theSanctuary.addElephantOwner('TPL', 'Tania', 'Paul', new Date(1995, 8, 2) )
        

		//ADD CODE HERE TO CREATE THE ELEPHANT

		/*
		FishOwner ID    Colour         Species             		Gender       Height

		   JOT          Greyish Brown    Asian     					M        11ft

		   RWM          Brown        	African bush              	F        10ft

		   ATR          Grey         	Asian                  		F        7ft

		   TPL          Grey         	African forest             	M        13ft

		   JOT          Black        	African bush           		M        12ft

		*/
		theElephantOwner = theSanctuary.findElephantOwner('JOT')
		theElephantOwner.addElephant(11, 'Greyish Brown', 'Asian', 'M')
		theElephantOwner.addElephant(12, 'Black', 'African bush', 'M')

		theElephantOwner = theSanctuary.findElephantOwner('RWM')
		theElephantOwner.addElephant(10, 'Brown', 'African bush', 'F')

		theElephantOwner = theSanctuary.findElephantOwner('ATR')
		theElephantOwner.addElephant(7, 'Grey', 'Asian', 'F')
		
		theElephantOwner = theSanctuary.findElephantOwner('TPL')
		theElephantOwner.addElephant(13, 'Grey', 'African forest', 'M')
		return theSanctuary
	}
}
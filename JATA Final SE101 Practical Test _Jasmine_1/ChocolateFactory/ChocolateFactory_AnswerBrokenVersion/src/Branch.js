class Branch {
	constructor (theBranchOwner, newId, newName, newLocation, newPurchaseDate) {
		// Add code here
		this.myBranchOwner = theBranchOwner
		this.id = newId
		this.name = newName
		this.location = newLocation
		this.purchaseDate = newPurchaseDate
	}


	toString () {
		
		/*Correct Format*/
		return this.id + ' ' + this.name + ',  ' + this.location + '.';
		
		/*Test for Incorrect Formats*/
		
		//return this.id  + this.name + ',  ' + this.location + '.'; 			/*No space between id and name*/
		//return ' ' + this.id + this.name + ',  ' + this.location + '.';		/*Single Space before id instead of after id*/
		//return this.id + '  ' + this.name + ',  ' + this.location + '.';		/*Two spaces after id*/
		//return this.id + '%' + this.name + ',  ' + this.location + '.';		/*Special character % instead of single space*/
		//return this.id + ' ' + this.name + ', ' + this.location + '.';        /*Comma and one space between name and location*/
		//return this.id + ' ' + this.name + '@  ' + this.location + '.';		/*Symbol @ instead of comma after name*/
		//return this.id + ' ' + this.name + ',' + this.location + '.';			/*No two spaces after comma*/
		//return this.id + ' ' + this.name + '  ' + this.location + '.';		/*No comma before two spaces before the location*/
		//return this.id + ' ' + this.name + this.location + '.';				/*Neither comma nor spaces between name and location*/
		//return this.id + ' ' + ',  ' + this.name +  this.location + '.';		/* Comma and two spaces before name*/
		//return this.name + ' ' + this.location + ',  ' + this.id + '.';		/*Parameters mispalced*/
		//return this.id + ' ' + this.name + ',  ' + this.location ;			/*No dot after location*/
		//return this.id + ' ' + this.name + ',  ' + this.location + '#';		/*Symbol # instead of dot at the end*/
		//return this.id + ' ' + this.name + ',  ' + '.' + this.location ;		/*Dot given before the location*/
	
		
		
	}
}
class BranchOwner {
	constructor (newId, newFirstName, newLastName, newGender) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.gender = newGender
		this.allMyBranches = []
	}

	sortBranches () {
		this.allMyBranches.sort(function (a, b) {
				return a.branchName > b.branchName
		})
	}
	
	toString () {
		/*Correct Format*/
		
		return this.id + '. ' + this.firstName + ' ' + this.lastName
		
		/*Test for Incorrect Formats*/
		
		//return this.id + '.' + this.firstName + ' ' + this.lastName		/*No space after dot*/
		//return this.id + '.  ' + this.firstName + ' ' + this.lastName		/*Two spaces after dot*/
		//return this.id + '* ' + this.firstName + ' ' + this.lastName		/* Another special character * instead of dot*/
		//return this.id + this.firstName + ' ' + this.lastName 			/*No dot and space between id and firstname*/
		//return  '. ' + this.id + this.firstName + ' ' + this.lastName		/*Dot and 2 spaces given before id instead of after id*/ 
		//return this.id + '. ' + this.firstName + this.lastName			/* No space between firstname and lastname */
		//return this.id + '. ' + this.firstName + '  ' + this.lastName		/* Two spaces between firstname and lastname */
		//return this.id + '. ' + this.firstName + ' &' + this.lastName		/* Give & between firstname and lastname instead of single space*/
		//return this.id + '. ' + this.firstName + this.lastName+' '		/* Single spaces given after lastname not before it */
		//return this.firstName + '. ' + this.lastName +' '+this.id			/* Misplaced the parameters */	
	}

	addBranch ( newId, newBranchName, newLocation, newPurchaseDate ) {
		let newBranch = new Branch(  this, newId, newBranchName, newLocation, newPurchaseDate)
		this.allMyBranches.push(newBranch)
	}

	hasTwoBranches () {
		return this.allMyBranches.length === 2
	}

	getBranches () {
		this.sortBranches()
		let out = ''
		for (let aBranch of this.allMyBranches) {
			
			/*Correct Format*/
			out += '	'+ aBranch + '\n'
			
			/*Test for Incorrect Formats*/
			
			//out += aBranch + '\n' 				/*No tab at the begininig*/
			//out += ' '+ aBranch + '\n'			/*Space instead of tab*/
			//out +=aBranch +'	'+  + '\n'			/*Tab after branch details*/
			//out += '	'+ aBranch					/*No newline at the end*/
			//out += '	'+ '\n'+ aBranch 			/*Newline before Branch detail and after tab*/
		}
		return out
	}
}
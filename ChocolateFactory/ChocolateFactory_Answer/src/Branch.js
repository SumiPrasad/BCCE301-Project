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
		return this.id + ' ' + this.name + ',  ' + this.location + '.';
	}
}
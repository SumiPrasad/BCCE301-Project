class ChocolateFactory  {
	constructor () {
		this.allMyBranchOwners = []
	}

	addBranchOwner (newId, newFirstName, newLastName,  newGender) {
		var newBranchOwner = new BranchOwner(newId, newFirstName, newLastName, newGender)
		this.allMyBranchOwners.push(newBranchOwner)
	}

		findBranchOwner (targetId) {
    return this.allMyBranchOwners.find( aBranchOwner => aBranchOwner.id === targetId) 
   
}

	sortBranchOwners () {
		this.allMyBranchOwners.sort( function (a,b) {
			return a.id - b.id
			})
	} 



}
class ChocolateFactory  {
	constructor () {
		this.allMyBranchOwners = []
	}

	addBranchOwner (newId, newFirstName, newLastName,  newGender) {
		var newBranchOwner = new BranchOwner(newId, newFirstName, newLastName, newGender)
		this.allMyBranchOwners.push(newBranchOwner)
	}

	findBranchOwner (targetId) {
		let foundBranchOwner = null
		for (let aBranchOwner of this.allMyBranchOwners){
			if (aBranchOwner.id === targetId) {
				foundBranchOwner = aBranchOwner
			}
		}
		return foundBranchOwner
	}

	sortBranchOwners () {
		this.allMyBranchOwners.sort( function (a,b) {
			return a.id - b.id
			})
	} 



}
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

	getBranchOwners () {
		this.sortBranchOwners()
		let out = ''
		for (let aBranchOwner of this.allMyBranchOwners){
			out += aBranchOwner + '\n'
		}
		return out
	}

	getBranchOwnersWithTwoBranches () {
		this.sortBranchOwners()
		let out = ''
		for (let aBranchOwner of this.allMyBranchOwners){	
			if (aBranchOwner.hasTwoBranches()){
				out += aBranchOwner + '\n' 
				out += aBranchOwner.getBranches()
			}
		}
		return out
	}

}
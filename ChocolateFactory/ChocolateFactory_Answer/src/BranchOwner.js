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
		return this.id + '. ' + this.firstName + ' ' + this.lastName
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
			out += '    ' + aBranch + '\n'
		}
		return out
	}
}
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
	
}
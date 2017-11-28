class PandaSponsor {
	constructor (newId, newFirstName, newLastName, newGender) {
		this.id = newId
		this.firstName = newFirstName
		this.lastName = newLastName
		this.gender = newGender
		this.allMyPandas = []
	}

	sortPandas () {
		this.allMyPandas.sort(function (a, b) {
		
				return a.pandaName > b.pandaName
		})

	}
	
	
}
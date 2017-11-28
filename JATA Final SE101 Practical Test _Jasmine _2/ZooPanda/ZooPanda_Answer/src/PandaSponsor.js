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
	
	toString () {
		return this.id + '. ' + this.firstName + ' ' + this.lastName
	}

	addPanda ( newId, newpandaName, newGender, newAge, newLocation ) {
		let newPanda = new Panda(  this, newId, newpandaName, newGender, newAge, newLocation)
		this.allMyPandas.push(newPanda)
	}

	hasTwoPandas () {
		return this.allMyPandas.length === 2
	}
	
	getPandas () {
		this.sortPandas()
		let out = ''
		for (let aPanda of this.allMyPandas) {
			out += '    ' + aPanda + '\n'
		}
		return out
	}
}
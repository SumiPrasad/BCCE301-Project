class Zoo  {
	constructor () {
		this.allMyPandaSponsors = []
	}

	addPandaSponsor (newId, newFirstName, newLastName,  newGender) {
		var newPandaSponsor = new PandaSponsor(newId, newFirstName, newLastName, newGender)
		this.allMyPandaSponsors.push(newPandaSponsor)
	}

	findPandaSponsor (targetId) {
		let foundPandaSponsor = null
		for (let aPandaSponsor of this.allMyPandaSponsors){
			if (aPandaSponsor.id === targetId) {
				foundPandaSponsor = aPandaSponsor
			}
		}
		return foundPandaSponsor
	}

	sortPandaSponsors () {
		this.allMyPandaSponsors.sort( function (a,b) {
			return a.id - b.id
			})
	} 

	getPandaSponsors () {
		this.sortPandaSponsors()
		let out = ''
		for (let aPandaSponsor of this.allMyPandaSponsors){
			out += aPandaSponsor + '\n'
		}
		return out
	}

	getPandaSponsorsWithTwoPandas () {
		this.sortPandaSponsors()
		let out = ''
		for (let aPandaSponsor of this.allMyPandaSponsors){	
			if (aPandaSponsor.hasTwoPandas()){
				out += aPandaSponsor + '\n' 
				out += aPandaSponsor.getPandas()
			}
		}
		return out
	}

}
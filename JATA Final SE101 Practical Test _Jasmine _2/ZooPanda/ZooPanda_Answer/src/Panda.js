class Panda {
	constructor (thePandaSponsor, newId, newPandaName, newGender, newAge, newLocation) {
		this.myPandaSponsor = thePandaSponsor
		this.id = newId
		this.name = newPandaName
		this.gender = newGender
		this.age = newAge
		this.location = newLocation
	
	}


	toString () {
		return this.id + ' ' + this.name + '( '+this.gender+' )' + ' Panda from ' + this.location + ' is ' + this.age + ' years old ';
	}
}
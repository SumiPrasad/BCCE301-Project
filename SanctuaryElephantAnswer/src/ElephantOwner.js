class ElephantOwner {
  constructor (newId, newFirstName, newLastName, newBirthDate, theSanctuary) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.mySanctuary = theSanctuary
    this.allMyElephants = []
  }
  toString () {
    return this.firstName + ', ' + this.lastName + '. ' + '<' + this.id + '>'
  }

  addElephant (newHeight, newColor, newSpecies, newGender) {
    let newElephant = new Elephant(this, newHeight, newColor, newSpecies, newGender)
    this.allMyElephants.push(newElephant)
  }

  sortElephants () {
    this.allMyElephants.sort(function (a, b) {
      if (a.species !== b.species) {
        return a.species > b.species
      }
      return b.height - a.height
    })
  }
  hasTwoElephants () {
    return this.allMyElephants.length === 2
  }

  getElephants () {
    this.sortElephants()
    let out = ''
    for (let anElephant of this.allMyElephants) {
      out += anElephant + '\n'
    }
    return out
  }
}

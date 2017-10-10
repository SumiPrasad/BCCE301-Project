class ElephantOwner {
  constructor (newId, newFirstName, newLastName, newBirthDate, theSanctuary) {
    this.id = newId
    this.firstName = newFirstName
    this.lastName = newLastName
    this.birthDate = newBirthDate
    this.mySanctuary = theSanctuary
    this.allMyElephants = []
  }
  sortElephants () {
    this.allMyElephants.sort(function (a, b) {
      if (a.species !== b.species) {
        return a.species > b.species
      }
      return b.height - a.height
    })
  } 
}

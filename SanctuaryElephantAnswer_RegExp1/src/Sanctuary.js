class Sanctuary {
  constructor () {
    this.allMyElephantOwners = []
  }

  addElephantOwner (newId, newFirstName, newLastName, newBirthDate) {
    let newElephantOwner = new ElephantOwner(newId, newFirstName, newLastName, newBirthDate, this)
    this.allMyElephantOwners.push(newElephantOwner)
  }

  findElephantOwner (targetOwnerId) {
    let foundOwner = null
    for (let aOwner of this.allMyElephantOwners) {
      if (aOwner.id === targetOwnerId) {
        foundOwner = aOwner
        break
      }
    }
    return foundOwner
  }

  sortElephantOwners () {
    this.allMyElephantOwners.sort(function (a, b) {
      return a.id > b.id
    })
  }

  getElephantOwners () {
    this.sortElephantOwners()
    let out = ''
    for (let aElephantOwner of this.allMyElephantOwners) {
      out += aElephantOwner + '\n'
    }
    return out
  }

  getThoseWithTwoElephants () {
    this.sortElephantOwners()
    let out = ''
    for (let aElephantOwner of this.allMyElephantOwners) {
      if (aElephantOwner.hasTwoElephants()) {
        out += aElephantOwner + '\n'
        out += aElephantOwner.getElephants()
      }
    }
    return out
  }
}
class Elephant {
  constructor (theElephantOwner, newHeight, newColor, newSpecies, newGender) {
    this.myElephantOwner = theElephantOwner
    this.height = newHeight
    this.color = newColor
    this.species = newSpecies
    this.gender = newGender
  }

  toString () {
    return '\t' + this.color + ' ' + this.species + ' (' + this.gender + ') has ' + this.height + 'ft'
  }
}
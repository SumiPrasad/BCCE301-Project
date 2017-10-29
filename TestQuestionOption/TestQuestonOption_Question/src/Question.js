class Question  {
	constructor (newId, newStub, theTest ) {
    this.id = newId
    this.stub = newStub
    this.myTest = theTest
    this.allMyOptions = []
	}

	sortOptions () {
    this.allMyOptions.sort(function (a, b) {
        return b.letter - a.letter
    })
	}	
}

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
	toString() {
		return this.id + '. ' + this.stub
	}
	
	addOption (newLetter, newText, newCorrect ) {
		let newOption = new Option( newLetter, newText, newCorrect, this )
		this.allMyOptions.push( newOption )
	}
	
	getOptions() {
		let result = ''
		for (let anOption of this.allMyOptions) {
			result += '    ' + anOption + '\n'
		}
		return result
	}
}

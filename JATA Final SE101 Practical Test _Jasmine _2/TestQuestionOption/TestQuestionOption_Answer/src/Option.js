class Option {
	constructor (newLetter, newText, newCorrect=false, theQuestion ) {
		this.letter = newLetter
		this.text = newText
		this.correct = newCorrect
		this.myQuestion = theQuestion
	}
	
	isCorrect() {
		return this.correct
	}
	
	toString() {
		let result = '(' + this.letter + ') ' + this.text 
		if (this.isCorrect() ) {
			result += '*'
		}
		return result
	}

}

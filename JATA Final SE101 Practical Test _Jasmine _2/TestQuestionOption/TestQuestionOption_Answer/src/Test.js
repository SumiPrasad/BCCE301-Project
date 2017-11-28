class Test {
	constructor () {
		this.allMyQuestions = []
	}

	addQuestion (newId, newStub) {
		var newQuestion = new Question(newId, newStub, this)
		this.allMyQuestions.push(newQuestion)
	}

	findQuestion (targetId) {
		var found, aQuestion
		found = null
		for (aQuestion of this.allMyQuestions) {
			if (aQuestion.id === targetId) {
				found = aQuestion
				break
			}
		}
		return found
	}

	sortQuestions  () {
		this.allMyQuestions.sort(function (a, b) {
			return a.id > b.id
		})
	}
	
	getQuestions (){
		let result = ''
		for (let aQuestion of this.allMyQuestions ) {
			result += aQuestion + '\n'
		}
		return result
	}
	toString() {
		let result = ''
		for (let aQuestion of this.allMyQuestions ) {
			result += aQuestion + '\n'
			result += aQuestion.getOptions()
		}
		return result 
	}
}
class grade{
	constructor(subject){
		Object.assign(this,subject)
		console.log(this.subject)
	}
}
class study extends grade{
	constructor(subject){
		super(subject)
	}
	}
let h = new grade({subject : 3})
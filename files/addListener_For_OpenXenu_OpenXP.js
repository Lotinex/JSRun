class addListener {
	constructor(args){
		let my = this;
	const checkLine = new RegExp(args.join(`|`),`gi`)
	my.check = target => {
	return target.match(checkLine)
	}
	my.filter = (target, res, fn) => {
		let result = target.replace(checkLine,res ? res : `**`)
	if(fn)	fn(result)
		return result;
	}
	}
	}
	const Q = new addListener([`(씨|시)발`,`ㅗ`])
	alert(Q.filter(prompt(),'##'))

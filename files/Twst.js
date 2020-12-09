
class Package {
	constructor(config){
	let $ = config
	$['Query'](13)
	}
	static info(v){
		console.log(v)
	}
}
let a = new Package({Query : e => { Package.info(e)}})
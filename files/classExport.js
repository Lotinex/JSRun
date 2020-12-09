Function.prototype.export = function(maybeOption){
	let res = {}	maybeOption.forEach(function(e){
		res[e] = this[e]
	})
	let on = (_cb) => {
		_cb(res)
	}
	return {
		on : on
	}
}
class Main {
	constructor(){
		this.name = '로티넥스'
	}
}
Main.export(['name']).on(res => {
	console.log(res)
})
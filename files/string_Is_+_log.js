//const q = prompt()
//const L = q.split(' ')
String.prototype.log = function(req,res){
	let my = this
	console.log(my.substr())
}
String.prototype.is = function(req,res){
	let my = this
	let v = my.indexOf(req) != -1 ? "포함합니다." : "포함하지 않습니다."
	return v
}
prompt().is('a').log()


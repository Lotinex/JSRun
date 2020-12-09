const L = String.prototype;
const jj = Array.prototype;
const ob = Object.prototype;
const file = this
L['addClass'] = function(req,res,f){
	let my = this
	let o = `${req}${my}${req}`
	return o;
}
L['cut'] = function(req,res,f){
	let v = this.split(req)[res]
	if(f) f(v)
	return v
}
L['trace'] = function(req){
	let my = this
	console.log(my)
}
L['info'] = function(req){
	let my = this
	alert(my)
}
L['count'] = function(req){
	const my = this;
	const R = new RegExp(req,"g");
	return my.match(R).length
}
L['has'] = function(req){
	return this.indexOf(req) != -1 ? req : false
}
L['del'] = function(req,res,f){
	let my = this
	let R = new RegExp(req,"g")
	let v = my.replace(R,'')
	if(f) f(v)
	return v
}
L['chan'] = function(req,res,f){
	let my = this
	let R = new RegExp(req,"g")
	let v = my.replace(R,res)
	if(f) f(v)
	return v
}
L['end'] = function(){
	return this[this.length - 1]
}
jj['log'] = function(){
	console.log(this)
}
ob['Allocate'] = function(req,res,f){
	let my = this
	let v = JSON.stringify(my)
	let e = v.split(',')
	let h = []
	let l = new RegExp(`[1-${e[e.length]}]`,"g")
		e[0] += '}'
		for(let i=1;i<e.length - 1;i++){
		e[i] = `{${e[i]}}`
		}
		e[e.length - 1] = `{${e[e.length - 1]}`
		let D = '""'[0]
		let R = new RegExp(`${D}`,"g")
		e.forEach((E,n) => {
			e[n] = E.replace(R,'')
		})
	 return e
}
const ans = prompt()
if(ans.has('안녕')) '안녕!'.trace()

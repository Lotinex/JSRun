const L = String.prototype;
const jj = Array.prototype;
const ob = Object.prototype;
const N = Number.prototype;
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
L['log'] = function(req){
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
N['log'] = function(){
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
var c = 0
function Timer(time){
	return new Promise(resolve => {
		setTimeout(() => {
			`설정된 타이머가 종료되었습니다 : ${time}`.info()
		},time * 1000)
	})
}
function CountStop(req){
	clearInterval(req)
}
async function Call(req){
	let TimeStamp = Number(prompt())
	TimeStamp.log()
	let Count = setInterval(() => {
		TimeStamp--;
		TimeStamp.log()
		if(TimeStamp <= 0) CountStop(Count)
	},1000)
	await Timer(TimeStamp);
}
Call()

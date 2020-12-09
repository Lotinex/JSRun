Object.prototype.del = function(req){
	let my = this
	if(my[req]) delete my[req]
	else throw new ReferenceError(`${req}는 이 객체가 가지고 있지 않은 속성입니다!`,)
}
var dic = {
	a : 1
}
dic.del('b')
console.log(dic)
String.prototype.count = function(req){
	const my = this;
	const L = new RegExp(req,"g");
	return my.match(L).length
}
console.log('abcd'.count("a"))

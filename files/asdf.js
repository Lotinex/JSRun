const G = function(req,res){
	var my = this;
	my.config = 5,
	my.test = 3,
	my.join = () => {
		if(2 > 1) return "FF"
		else{
		return 444
		}
	}
}
var k = {}
k['test'] = new G()
console.log(k['test'].join())
console.log(k['test'])

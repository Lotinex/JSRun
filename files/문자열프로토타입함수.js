String.prototype.cutByStr = function(req,res){
	const my = this
	const r = my.split(req.str)[req.num]
	res(r)
	return r;
}
const a = 'command kirnel config -f /fi = g'
a.cutByStr({str : ' ',num : 1},res => {
	console.log(res)
})
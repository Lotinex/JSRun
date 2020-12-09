var f = {}
function c(a){
	return new Promise(s => {
		if(f[a]) console.log(1)
	})
}
async function on(req,res){
	let o = await c(req)
	res(o)
}
on('d',e => {
	console.log(e)
})
f[prompt()] = 1


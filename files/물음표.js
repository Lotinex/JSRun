function load(req,res){
	let i = 0
	setInterval(() => {
		if(i >= 100) clearInterval()
		console.log(req + i)
		i++
	},res * 1000)
	return 1
}
async function on(req,res){
	await load(req,res)
	console.log('완료')
}
on('00000001.sol',0.2)
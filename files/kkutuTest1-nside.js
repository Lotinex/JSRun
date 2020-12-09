function Server(){
	const my = this;
	my.$stage = {
		open : 1,
		close : 0,
		warn : 2
	}
	var $data;
	var DIC = {}
	var CHAN = {}
	function Open(req,res,...args){
	var $c = Number(my.$stage.open) + Number(req.port[0])
	var cluster = `cluster CHAN@${$c}`
	CHAN[cluster] = true;
	var tail = (req) => {
		console.log(`클러스터가 열렸습니다 : ${cluster}`)
	}
	return {
		tail : tail
		}
	}
	return {
		Open : Open
	}
}
Server().Open({port : '0 1'}).tail()
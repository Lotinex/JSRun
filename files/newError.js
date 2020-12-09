function error(req,res){
	var my = this;
	this.e = new Error(req).toString()
	var publish = () => {
		alert(my.e)
	}
	var tail = () => {
		console.log(my.e)
	}
	return {
		publish : publish,
		tail : tail
	}
	}
	error('lor is not an ADMIN.').publish()

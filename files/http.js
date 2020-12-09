var http = {
	XMLRequest : (req,type) => {
		var my = this;
		var Parse = () => {
			my.siteDomain = req,
			my.data_locked = req[0]
		}
		my.data_s = req.slice(0,4)
		var then = (c) => {
			if(!c) console.log(my.data_s)
			eval(c)
		}
		return {
			then : then
		}
	}
}
http.XMLRequest('http:').then()

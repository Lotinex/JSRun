const occ = {}
const master = new Proxy({},{
	set : (target,prop,value) => {
		switch(prop){
			case "on":
			occ[value.ev] = value
			break;
		}
	}
})
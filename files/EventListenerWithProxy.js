/**
@occ role = RegisterObject
@param target null
@envment JavaScript ES6
*/
const occ = {}
const master = new Proxy({},{
	set : (target,prop,value) => {
		switch(prop){
			case "on":
			occ[value[0]] = value[1]
			break;
			case "emit":
			occ[value[0]](value[1])
			break;
		}
		return true;
	}
})
class Renatus{
	static on(ev,fn){
		master.on = [ev,fn]
	}
	static emit(ev,p){
		master.emit = [ev,p]
	}
}
/** 
@param limit = 1 
@class Renatus
*/
Renatus.on('onChat',data => {
	console.log(data)
})
const chatVal = prompt()
Renatus.emit('onChat',chatVal)


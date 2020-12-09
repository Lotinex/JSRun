var ROOM = {}
var _ROOM = function($){
	this.player = 0;
	this.banned = []
	this.list = []
	this.MASTER = $.MASTER
	this.$data = {}
	this.pw = $.pw
}
var id = prompt()
if(!ROOM[id]) ROOM[id] = new _ROOM({MASTER : 'skh1936sg29'})
console.log(ROOM[id])
var online;
var cpu = 1;
var port = 8080;
var username;
var msg;
var MsgType;
var warnmsg;
var Kkutu = {
	exports : 'v3',
	module : './main.js',
	core : '../kkutu.min.js',
	css : '../public.css',
	cluster : '$.cluster(' + cpu + ');'
	};
var JLog = {
	info : username + msg + '/' + MsgType,
	open : 'Kkutu server ' + Kkutu.exports + ' : ' + port,
	warn : this.open + 'warn :' + ' at ' + Kkutu.cluster,
	close : 'server closed : ' + Kkutu.module + ','  + Kkutu.core
};
const Master = {
	on : online = 0,
	off : online = 0
};
	var smt = prompt('server manager v3');
	switch (smt){
		case 'on' :
		console.log(JLog.open);
		if(Master.on){
			console.log('server is running at ' + port);
		}else{
			console.log('worker ' + port + ' died');
		console.log(JLog.warn);
		console.log(JLog.close);
		alert('Fetal Error : ' + JLog.close);
		}
		break;
	}
	
	

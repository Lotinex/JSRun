var mem = [];
var game = {
	useLimit : true,
	turnLimit : 10,
	useDICt : false,
	name : 'KMIG',
	madeBy : 'lot'
};
var turn = 0;
var isTurnfrst;
var endOfline;
function interval(msg){
	alert('게임이 끝났습니다 : ' + msg);
}
function error(info){
	alert('이 값은 사용할수 없습니다. ' + '사유 : ' + info);
}
var DIC = prompt('시작 : ');
if(DIC == null || DIC == ''){
	error('올바르지 않은 값입니다.');
}
isTurnfrst = true;
if(isTurnfrst){
	endOfline = DIC.substring(DIC.length - 1,DIC.length);
	mem.push(DIC);
	console.log(DIC);
	var frstEnd = DIC;
	if(game.useLimit){
		turn = turn + 1;
	}
	isTurnfrst = false;
}
function send(){
	if(turn == game.turnLimit){
	interval('강제적 종료');
	}else{
DIC = prompt('입력 : ' + endOfline);
if(DIC == null || DIC == ''){
	error('올바르지 않은 값입니다.');
}
if(mem.indexOf(DIC) != -1){
	alert('사용한 단어 : ' + DIC);
	send();
}else if(endOfline == DIC[0]){
	var bef = DIC.length - 1;
	var aft = DIC.length;
	endOfline = DIC.substring(bef,aft);
	mem.push(DIC);
	console.log(DIC);
	if(game.useLimit){
		turn = turn + 1;
	}
	send();
}else{
	alert('첫 글자가 일치하지 않습니다.');
	send();
}
}
}
	send();

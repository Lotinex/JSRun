const utx = {};
const usr = {};
const $m = {
	Contax : {h : 150, a : 14, d : 8},
	Noxula : {h : 220, a : 6, d : 10},
	Dicender : {h : 166, a : 12, d : 12},
	Vitarck : {h : 187, a : 10, d : 7}
};
usr.level = 1;
var floor = 0;
var Nprl;
function $r(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function level(pl,il){
	var r;
	(pl<il) ? r=false : r=true;
	return r;
}
function $(a){
	alert(a);
}
function main(mod){
	(mod) ? $('['+mod.data+']') : Nprl = null;
	floor = prompt('몇 층으로 떠나시겠습니까?');
	if(!level(usr.level,floor)){
		$('잠금 해제되지 않은 레벨입니다.');
		main();
	}
	$(floor + '층 으로 모험을 떠납니다 .');
	$('던전 탐험 중...');
	var $c = $m['Contax'];
	$($c + '(이)가 출현하였습니다!');
	}
main({data : '개발자 모드 상태입니다.'});

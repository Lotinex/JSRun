
function $r(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
var R = {
	newMob : function($){
		this.n = $.n;
		this.h = $.h;
		this.a = $.a;
		this.d = $.d;
		this.lv = $.lv;
	},
	Player : function($){
		this.n = $.n;
		this.h = $.h;
		this.a = $.a;
		this.d = $.d;
		this.lv = $.lv;
	},
	go : (l,f) => {
		if(Math.floor(f / 2) > l) return false
		else return true
	}
}
function $item(dat,num){
	for(var i=0;i<num;i++){
		inv.push(dat);
	}
}
var mobDat;
var inv;
const mobs = new Array();
mobs[0] = {n : 'Morem', h : 70, a : 12, d : 8}
mobs[1] = {n : 'Kenex', h : 100, a : 9, d : 7}
mobs[2] = {n : 'Noreph', h : 60, a : 14, d : 6}
function core(v){
	inv = [];
	if(v.useInf) var f = prompt('당신의 이름은 무엇입니까?')
	if(v.useInf) var player = new R.Player({n : f, h : 100, a : 10, d : 5, lv : 1});
	if(v.useInf){
		$item("나무 검 I",1);
	$item("나무 방패 I",1);
	$item("회복 물약 I",2);
	}
	const f2 = prompt('몇 층 던전으로 떠나시겠습니까?');
	if(!R.go(player.lv,f2)){
		const t = Math.floor(f2 / 2)
	alert('레벨이 모자랍니다. 요구 레벨 : ' + t);
	core({useInf : false});
	}else{
		alert('탐험 중... (1/1)');
		mobDat = mobs[$r(0,mobs.length)];
		var $c = {
		name : mobDat.n,
		hp : mobDat.h,
		atk : mobDat.a,
		def : mobDat.d
		}//$c를 객체로 만들어놓아야 할 것 같다.
		alert($c.name + '(이)가 출현하였다!')
		alert('[능력치]' + '\n' + '체력 : ' + $c.hp + '\n' + '공격력 : ' + $c.atk + '\n' + '방어력 : ' + $c.def)
		var f = confirm('싸우시겠습니까?')
		if(!f){
			alert(`${$c.name} 에게서 도망쳤습니다..`)
		}else{
			for(var i in inv){
				console.log(inv[i])
			}
			
		}
	}
}
core({useInf : true});

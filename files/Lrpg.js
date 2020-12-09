function $random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
let $inv = [];
const $monster = ["Tracks","Judger","Canon","Nexalor","Minate"];
var atk;
var $enName;
var $myHp = 100;
var $active;
var isFight;
var $enAtk;
var $enHp;
var $enDef;
var cmo;
var g = 0;
var level;
var plyLevel = 1;
var Tracks = [120,17,6];
var Judger = [155,15,6];
var Canon = [97,22,3];
var Nexalor = [100,19,4];
var Minate = [200,8,10];
let $ = function(dat){
	$inv.push(dat);
}
let $Myatk = function(dmg){
	$enHp = $enHp - dmg;
}
let $Enatk = function(dmg){
	$myHp = $myHp - dmg;
}
let L = function(type,dat){
	if(type == 'yell'){
		alert(dat);
	}else if(type == 'info'){
		console.log(dat);
	}
}
let $giveG = function(length){
	g = g + length;
}
function callGame(){
	level = prompt('몇층 던전으로 떠나시겠습니까?');
	var $plus;
	L('yell',level + '층 던전으로 모험을 떠납니다.');
	$("회복 물약 I");
	$giveG(450);
	L('info','골드와 물약을 받았습니다.');
	L('yell','탐험 중...');
	cmo = $monster[$random(0,$monster.length)];
	if(cmo != undefined){
	L('yell','몬스터 ' + cmo + '(이)가 출현하였습니다!');
	}else if(cmo == undefined){
		L('yell','정체를 알 수 없는 생명체가 등장하였습니다!');
	}
	switch(cmo){
		case "Tracks" :
		L('yell','몬스터의 능력치 : ' + '체력 ' + Tracks[0] + ',' + '공격력 ' + Tracks[1] + ',' + '방어력 ' + Tracks[2]);
		$enHp = Tracks[0];
		$enAtk = Tracks[1];
		$enDef = Tracks[2];
		$enName = 'Tracks';
		break;
		case "Judger" : 
		L('yell','몬스터의 능력치 : ' + '체력 ' + Judger[0] + ',' + '공격력 ' + Judger[1] + ',' + '방어력 ' + Judger[2]);
		$enHp = Judger[0];
		$enAtk = Judger[1];
		$enDef = Judger[2];
		$enName = 'Judger';
		break;
		case "Canon" :
		L('yell','몬스터의 능력치 : ' + '체력 ' + Canon[0] + ',' + '공격력 ' + Canon[1] + ',' + '방어력 ' + Canon[2]);
		$enHp = Canon[0];
		$enAtk = Canon[1];
		$enDef = Canon[2];
		$enName = 'Canon';
		break;
		case "Nexalor" :
		L('yell','몬스터의 능력치 : ' + '체력 ' + Nexalor[0] + ',' + '공격력 ' + Nexalor[1] + ',' + '방어력 ' + Nexalor[2]);
		$enHp = Nexalor[0];
		$enAtk = Nexalor[1];
		$enDef = Nexalor[2];
		$enName = 'Nexalor';
		break;
		case "Minate" :
		L('yell','몬스터의 능력치 : ' + '체력 ' + Minate[0] + ',' + '공격력 ' + Minate[1] + ',' + '방어력 ' + Minate[2]);
		$enHp = Minate[0];
		$enAtk = Minate[1];
		$enDef = Minate[2];
		$enName = 'Minate';
		break;
		default :
		L('yell','몬스터의 능력치를 알 수 없습니다...');
		$enHp = '?';
		$enAtk = '?';
		$enDef = '?';
		break;
	}
	L('info','인벤토리 : ');
	L('info','골드 : ' + g);
	for(var i=0;i<$inv.length;i++){
	L('info',$inv[i]);
	}
	isFight = prompt('싸우시겠습니까? Y/N');
	if(isFight == 'Y'){
		atk = $random(10,40);
		var realAtk = atk - $enDef;
		$Myatk(realAtk);
		L('yell',$enName + '에게 ' + realAtk + '의 데미지를 입혔다! (남은 체력 : ' + $enHp + ')');
		$Enatk($enAtk);
		L('yell',$enName + '(이)가 공격하여 ' + $enAtk + '의 데미지를 입었다! (남은 체력 : ' + $myHp + ')');
	}
}
callGame();

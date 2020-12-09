var ADMIN = { //id와 pw를 저장
	lotinex : {id : 'lotinex', pw : 'daldalso'}
};
var KKuTu = {
	Client : function(DIC){
		this.name = DIC['name'];
		this.lv = DIC['lv'];
	},
	Publish : function(config){
		(config['type'] == '$a') ? alert(config['data']) : console.log(config['data']);
	},
	$Random : function(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min; },
processAdmin : (DIC) => {
			if(!ADMIN[DIC.id]){ //일단 있는지 찾아보자.
				alert('error : 400');
			}else{
				var isPw = prompt('>pw : ');
				if(isPw == undefined || isPw == null || !isPw) console.log("pw 형식이 올바르지 않습니다."); //그 다음 처리한다.
				else (ADMIN[DIC['id'][pw]] == isPw) ? alert('환영합니다.') : alert('error : 401')
			}
		}
};
var guest = { //저장 추가 필요
	name : 'GUEST' + KKuTu.$Random(1000,9999),
	lv : 1
};
//이제 새로운 클라이언트를 객체로 내뱉는다.
var GUEST = new KKuTu.Client({name : guest['name'], lv : guest['lv']});  //사실 lv부분은 그냥 1로 통일해도 된다.
KKuTu.Publish({type : '$c', data : GUEST});
//var c = confirm('use Admin function?');
/*if(c)*/ KKuTu.processAdmin({id : prompt()});

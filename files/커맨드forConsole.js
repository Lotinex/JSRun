var res;
String.prototype.r = function(a,b){
	return this.replace(a,b)
}
const a = v => {
	let c = v.split('%')[1]
	R = new RegExp(`\%${c}\%`,"gi")
	switch(c){
		case "btn" :
	res = v.r(R,'[테스트 버튼]')
		break;
		case "bar" :
		res = v.r(R,'======')
		break;
		default :
		res = v
		break;
	}
	console.log(res)
}
a('%bar%~~에 오신 것을 환영합니다.%bar%\n')
a('%btn%  선택해 주세요.  %btn%\n')
a('%bar%%bar%%bar%%bar%%bar%%bar%\n')
a('던전 : %btn%\n')
a('상점 : %btn%\n')
a('길드 : %btn%\n')
a('퇴장 : %btn%\n')

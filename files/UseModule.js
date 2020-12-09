var js = this
const use = (module,option) => {
	let type = module.split('@')[1]
	switch(type){
		case 'js_pro' :
		js[type] = {test : "test",version : "v1.2.4", yell : alert}
		break;
		case 'kimdoyun' :
		js[type] = {babu : true, version : 'v1.4.8'}
		break;
		default :
		alert(`${type}은(는) 없는 확장 기능 입니다.`)
		break;
	}
}

use('@js_pro')
console.log(js.js_pro)
let doc = {
	ChatLog : "ChatLog"
}
let getElementById = i => {
	return (`#` + doc[i]) ? true : false
}
const $ = v => {
	if(getElementById(v)){
		console.log(`${v} 클래스를 찾을 수 없습니다.`)
	}
	return { val : f => {
		return (!f) ? v.substring(1,v.length) : f
	} }
}
console.log($("#sjsjs").val())

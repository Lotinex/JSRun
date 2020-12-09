var vote;
const _ = this
class set{
	constructor($){
		let my = this;
	if($.length <= 0) my.setting = false
		else Object.assign(my,$)
	}
}
const [vp, vt, ve] = [prompt('인원 :'),prompt('제목 :'),prompt('투표할 대상(/로 구분) :')]
const veList = ve.split('/')
const vcfg = new set({vp : vp,vt : vt,ve : veList})
var o = {}
var vin = ""
veList.forEach((e,j) => {
	o[e] = e
	_[e] = 0
	vin += `${e}에게 투표하시려면 ${j}를 입력해 주세요.\n`
})

for(let j=0;j<vp;j++){
	vote = prompt(vin)
	_[veList[vote]] += 1;	console.log(`${o[veList[vote]]}가 1표를 받았습니다.`)
}
var fv = ""
fv += `<${vcfg.vt} 투표 결과>\n=====투표 참여자 : ${vcfg.vp}=====\n`
	veList.forEach((e,j) => {
	fv += `${e}의 투표 총합 : ${_[veList[j]]}표\n`
	})
	fv += `====================`
	alert(fv)
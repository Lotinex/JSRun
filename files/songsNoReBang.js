var K;
var voice = 0;
var L = {}
L['songs'] = {a : {l : '3:40', h : 6}}
var s = prompt('곡 이름 : ')
if(!(s in L['songs'])){
	alert('없는 곡인데오?')
	return;
}
var gok = L['songs'][s];
const Injwo = Number(gok['l'].substring(0,gok.l.indexOf(':')) * 30) + Number(gok['l'].substring(gok.l.indexOf(':') + 1,gok['l'].length));
var ly = prompt('부르기 : ')
for(var j in ly){
	if(ly[j] == "!" || ly[j] == "^") voice++;
}
for(var k in ly){
	if(ly[k] == " ") ly.replace(ly[k],"")
}
console.log("==============")
console.log(`voice : ${voice}`)
console.log("==============")
console.log(`${ly}`)
K = Math.floor((Injwo - ly.length) / 1.4)
console.log(`당신의 점수는 ${(100 - K >= 100) ? 100 : 100 - K } 점!`)

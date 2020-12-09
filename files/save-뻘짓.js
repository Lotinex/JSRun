function $r(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
var word = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,
0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
'Q','R','S','T','U','V','W','X','Y','Z']
var init = '000.sol'
const stop = () => {
	clearInterval()
}
var p = 0
setInterval(() => {
	if(p >= 100) stop();
	else{
		init = '000.sol'
		for(let i=0;i<word.length;i++){
	init = init.replace(init[i],word[$r(0,word.length)])
}
	console.log(`${init}.sol : 저장 중... (${p} / 100)`)
	p += $r(1,10)
	}
},$r(10,20000))
console.log('데이터 저장을 시작합니다.')

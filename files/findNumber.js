var n = 0
for(let i=0;i<999999;i++){
	i = i.toString()
	if(i.match(/3/g)) n++
}
console.log(`${n}개 입니다.`)

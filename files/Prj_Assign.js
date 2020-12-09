const [t, r, append] = [prompt('리스트 입력'), [], console.log]
const getR = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Jcheck = (c,d) => {
	return new Promise((rs, rj) => {
		if(c == d) rs(d)
		else rj('값이 일치하지 않습니다.')
	})
}
const JJwak = (n) => {
	return String(n / 2).match(/\d+\.\d+/) ? false : true
}
for(let $=0;$<t.length;$++){
	if(JJwak($)) r.push(t[$])
}
const jar = r[getR(0,r.length)]
const Check = prompt('값 입력')
Jcheck(jar,Check)
.then(e => {
	const chat = prompt('채팅 입력')
	append(`[${e}] : ${chat}`)
})
.catch(error => {
	append(`Error : ${error}`)
})
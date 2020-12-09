const L = {
	serverClosed : '[##1] 서버가 닫혔습니다. 사유 : #2',
	notEnoughMoonstones : '[경고] 자원이 #1 개 부족합니다!'
}
function render(type, ...args){
	let res = L[type] || ''
if(args) args.forEach((e, n) => {
	let r = new RegExp(`#${n + 1}`)
	res = res.replace(r, e)
})
console.log(res)
}
render('notEnoughMoonstones', 6)
function exp(k){
	return Math.floor(37 * (Math.sqrt(51 * (k ** 2))) + ((2 * (k ** 3)) / (Math.sqrt(21 * k))))
}
var l = []
for(let i=1;i<200;i++){
	l.push(i)
}
l.forEach(e => {
	console.log(e + 'lv : ' + exp(e))
})
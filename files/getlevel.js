const T = [
null,
50,
100,
150,
280
]

function getLevelByExp(U){
	alert(1)
	let i = 1;
	let u = U
	while(T[i] != u){
		u--
		i++
	}
	let r1 = T[i]
	u = U
	i = T.length
	while(T[i] != u){
		u++
		i--
	}
	let r2 = T[i]
	alert(`${r1} ${r2}`)
}
getLevelByExp(77)

const l = [1,2,3,4]
for(let i in l){
	l[i] = l[i] + Number(i)
}
for(let j in [5,6,7,8]){
	alert(l[j])
}
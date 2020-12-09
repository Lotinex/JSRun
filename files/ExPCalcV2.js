function S(L){
	return Math.floor(7 * (L ** 2) + 3 * (L ** 3) - (2 * L ** 3))
}
for(i=1;i<50;i++){
	console.log(S(i))
}
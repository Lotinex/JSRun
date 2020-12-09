const v = [
null,
100,
150,
260,
360
]
function getLevel(U){
	if(U > v[v.length - 1]) throw `FindLevelError : cannot find level of value ${U}` //1
let fixed = U //1
let [r1, r2] = null; //1
while(v.indexOf(U) == -1){ //n
	U-- //n
}
r1 = U; //1
U = fixed; //1
while(v.indexOf(U) == -1){ //n
	U++ //n
}
r2 = U //1
if(r1 <= fixed < r2){ //1
	return v.indexOf(r1) //1
}
}
//T(n) = 2n^2 + 8
//O(n^2)
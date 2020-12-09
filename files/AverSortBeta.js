function sort(array){
	let [S, B] = []
	let allAdd = 0
	array.forEach(e => {
		allAdd += e
	})
	let aver = allAdd / array.length
array.forEach(e => {
	if(e >= aver) B.push(e)
	else S.push(e)
})
if(S.length) return sort(S)
else if(!S.length && B.length) return sort(B)
}
sort([1, 5, 7, 4])
function merge(arr, aver){
	let [S, B] = []
	while(arr.length){
		if(arr[0] >= aver) B.push(arr.shift())
		else S.push(arr.shift())
	}
	return {
		S : S,
		B : B
	}
}
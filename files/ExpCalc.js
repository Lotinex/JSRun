const $ = Math.sqrt;
const diff = [2,5,10]
const c = (k,h,S) => {
	let res = ((21 * $(k) / $(2 * h))) + ((S * $(3 * k)) / 3)
	return res
}
alert(c(100,diff[2],250))
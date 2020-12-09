var a =[1,2,3,4]
a.push(a[2])
a.shift()
a.map(v => {
	if(v == 3) console.log(v)
})

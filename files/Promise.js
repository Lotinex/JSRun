function get(param){
	return new Promise((resolve,reject) => {
		if(req == 0) reject('실패')
		else resolve('성공')
	})
}
get(prompt())
.then(e => console.log(e))
.catch(e => console.log(e))

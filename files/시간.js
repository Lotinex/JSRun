const k = new Date()
const g = `${k.getFullYear()}년 ${k.getMonth()}월 ${k.getDate()}일 ${k.getHours()}시 ${k.getMinutes()}분 ${k.getSeconds()}초`
setTimeout(() => {
	console.log(g)
},2000)
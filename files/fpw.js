displayGraphic = 5
displayCounterSet = 0.44242983
displaySpnningSet = 0.1134972
console.showFps = (n) => {
	let c  = 0
	let q = setInterval(() => {
		if(c == n) clearInterval(q)
		console.log('fps : ' + Math.floor(displayGraphic * (displayCounterSet * 10) + (displaySpnningSet + (Math.random() * 78))))
		c++
	},100)
}
console.showFps(7)

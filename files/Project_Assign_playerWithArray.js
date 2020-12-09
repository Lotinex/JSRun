const [reqList, R, log] = [prompt(), (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}, console.log]
let list = []
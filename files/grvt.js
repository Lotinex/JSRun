class Gravity {
	constructor(x, y){
		this.gP = '8.71'
		this.x = x
		this.y = y
	}
	fall(){
		let Fall = setInterval(() => {
			if(this.y <= 0) clearInterval(Fall)
			this.y -= 1 + this.gP
			console.log(this.y)
		},100)
	}
}
let pl = new Gravity(58, 100)
pl.fall()
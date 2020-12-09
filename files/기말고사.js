Object.prototype.view = function(target){	console.log(this[target])
}
class FinalExam {
	constructor(sub){
		this.Subs = {
			English : undefined,
			Science : undefined
		}
	}
	lastDay(){
		return this.Subs
}
setScore(o,_cb){
this.Subs = o
if(_cb) _cb(this.Subs)
else return this.Subs
	}
}
const Final = new FinalExam()
Final.lastDay().view('English')
Final.setScore({
	English : 200
}).view('English')
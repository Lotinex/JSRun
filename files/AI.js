var data = []
class deepLearning{
	static ans($){
		if($.match(/안녕\S*\d*(\?|\!)+/)) alert(`안녕!`)
		else alert(`...`)
	}
}
class remember extends deepLearning{
	static do(){
		
	}
}
const q = prompt(`아무 말이나 해보세요.`)
deepLearning.ans(q)
data.push(q)
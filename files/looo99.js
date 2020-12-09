const KKurumi = {
	Generate : function(req,res){
		var my = this;
		my.pw = req.pw,
		my.list = [],
		my.p = 1,
		my.limit = req.limit ? req.limit : 8,
		my.ban = ['a','aaab'],
		my.master = req.master,
		my.Join = (req,res) => {
			if(my.pw) return "PW"
			else{
			if(my.limit == my.p) return "FULL" 
			else{
				if(my.ban.indexOf(req) != -1) return "BAN"
				else {
					my.p++
					my.list.push(req)
					return "SUCCESS"
					}
			}
			
		}
		}
	}
}
var KKu = {}
KKu['test'] = new KKurumi.Generate({pw : 186,limit : 11, master : 'GUEST1961'})
console.log(KKu['test'].Join(123))
console.log(`============`)
console.log(`방 이름 : test\n방 인원 : ${KKu['test'].p}\n방 최대 인원 : ${KKu['test'].limit}\n방 차단 리스트 : ${KKu['test'].ban}\n방장 : ${KKu['test'].master}`)
console.log(`============`)

const db = ['가다','장구','도로','안녕']
var j = prompt()
function checkBat(req){
	var l = req[req.length - 1]
	var UNI = l.charCodeAt(0);
if (UNI < 44032 || UNI > 55203)return null;
return (UNI - 44032) % 28 != 0;
}
var josa = checkBat(j) ? '은' : '는'
var E = new RegExp(`^${j[j.length - 1]}`)
var c = 0;
for(var i in db){
if(db[i].match(E)){
	c++;
}
}
console.log(c > 0 ? `${j}${josa} 한방 단어가 아닙니다.` : `${j}${josa} 한방 단어입니다.`)

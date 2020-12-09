const db = ['가나']
function checkBatchimEnding(word) {

  if (typeof word !== 'string') return null;

 

  var lastLetter = word[word.length - 1];

  var uni = lastLetter.charCodeAt(0);

 

  if (uni < 44032 || uni > 55203) return null;

 

  return (uni - 44032) % 28 != 0;

}


var j = prompt()
var E = new RegExp(`^${j[j.length - 1]}`)
for(var i in db){
if(db[i].match(E)){
	console.log(`${j}는 한방 단어가 아닙니다.`)
	break;
}else{
	console.log(`${j}는 한방 단어 입니다.`)
	break;
}
}
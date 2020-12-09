var l = new Date();
var o = "["+l.getFullYear()+"-"+l.getMonth()+"-"+l.getDay()+" "+l.getHours()+" : "+l.getMinutes()+" : "+l.getSeconds()+"]"
var jj = {
	log : function(a,b){
		(b.type=='tail') ? 
		console.log(o + b.id + " : " + '"' + a + '"') : alert(o + b.id + " : " + '"' + a + '"');
	}
}
jj.log(prompt(),{id : 'GUEST1921', type : 'tail'});

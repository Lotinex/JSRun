var grade = 1;
var end = function(date){
	if(date == 3){
		grade = grade + 1;
		alert('시간이동했냐');
	}else{
	if(date == 2.7){
		alert('방학끝');
	}else{
		alert('아직');
	    }
	}
}
end(date = prompt('오늘 날짜 : '));

var document = {
	write : function(text){
		console.log(text);}
};
var $ = {
	ajax : function(url,data){
		if(typeof url != 'string'){
			data = '주소가 올바르지 않습니다.';
			document.write(data);
		}else{
			data = '정보 없음 : ' + url;
			document.write(data);
		}
}
};
$.ajax('lorlol701.kro.kr');
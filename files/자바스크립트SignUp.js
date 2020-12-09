var Black = ["...","...","..."];
var User = ["..","..",".."];
function NickSet(){
	var answer = prompt("닉네임을 정해주세요.");
	if(User.indexOf(answer) != -1){
		alert(answer + '는 이미 있는 닉네임 입니다!');
	}else{
	var IsBlack = answer;
	var nickName = answer;
	if(Black.indexOf(IsBlack) != -1){
		alert(nickName + '은 ' + '차단된 계정입니다!');
	}else{
		alert('환영합니다.' + nickName + '님.');
	}
	}
}
NickSet();

var chat;
var Banned = [];
var GM = ['이에'];
var Users = ['이예에에'];
var user;
function type(){
	user = prompt('닉네임을 정해주세요.');
	if(user.length >= 10){
		alert('닉네임은 10자 이하로 정해주세요.');
	}else if (GM.indexOf(user) != -1){
		 user = '[GM]' + user;
		 }else{
	chat = prompt('채팅을 입력하세요.');
	switch (chat){
		case 'ban' :
		var banUser = prompt('차단할 유저 : ');
		if(Users.indexOf(banUser) != -1){
			Banned.push(banUser);
			alert('유저 ' + banUser + '을(를) 차단했습니다.');
		}else{
			alert('없는 유저입니다.');
			
		}
		
		
		
		
		
	}
	console.log(user + '  |  ' + chat);
}
}
type();

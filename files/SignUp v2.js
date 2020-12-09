var Black = [];
var User = ["...","...","..."];
var answer; //전역 변수로 설정
	function promptGet(){ //아래 함수를 포괄
		function UserInfo(){
		answer = prompt('닉네임을 정해주세요.');
		}
		UserInfo();
	if (answer == ""){ //닉네임을 정하지 않았을때
		alert('닉네임은 필수 항목입니다.');
		UserInfo();
	}else{
		if(answer == null){ //취소 버튼을 눌렀을때
			alert('닉네임 정하기를 취소하셨습니다. 다음에 언제든지 다시 정하실수 있습니다.');
		}else{
	if(User.indexOf(answer) != -1){ //이미 있는 닉네임인지 검사
		alert(answer + '는 이미 있는 닉네임 입니다!');
	}else{
	var IsBlack = answer;
	var nickName = answer;
	if(Black.indexOf(IsBlack) != -1){ //차단된 닉네임인지 검사
		alert(nickName + '은 ' + '차단된 계정입니다!');
	}else{
		alert('환영합니다.' + nickName + '님.');
		User.push(nickName);
		 } 
	   } 
	   }
	  }
	  }
	function act(){
		var actType = prompt('명령어를 입력해주세요.');
		switch (actType){
			case 'nick' :
			promptGet();
			break;
			case 'banlist' :
			for(var i = 0; i<Black.length; i++){
				console.log(Black[i]);
			} if(i == 0){
				alert('차단된 사용자가 없습니다.');
				break;
			}else{
			break;
			}
			case 'userlist' :
			for(var j = 0; j<User.length; j++){
				console.log(User[j]);
			} if (j == 0){
				alert('유저가 없습니다.');
				break;
			}else{
				break;
			}
			default :
			alert('알수 없는 명령어입니다.');
			break;
		}

	
	}
act();

    

var userList = ['...','...','...'];
var init = prompt();
if(init.indexOf('$kill') != -1){
	var argv = init.indexOf(' ');
	var args = init.substring(argv + 1,init.length);
	if(userList.indexOf(args) != -1){
	alert('유저 ' + args + '의 접속을 끊었습니다.');
	var k = userList.indexOf(args);
	userList.splice(k,1);
	
	}
}

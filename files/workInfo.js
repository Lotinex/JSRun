const work = {
	book : 'test0',
	history : 'test1',
	english : 'test2',
	non : '해당 숙제가 없습니다.',
	cancel : '취소하셨습니다.언제든지 다시 확인하실수 있습니다.'
	};
	const workHelp = ['book','history','english'];
function info(){
	var infoType = prompt('workInfo_console v1.0.2 / 명령어를 입력하세요.');
	switch (infoType){
		case 'book' :
		alert(work.book);
		break;
		case 'history' :
		alert(work.history);
		break;
		case 'english' :
		alert(work.english);
		break;
		default :
		alert(work.non);
		break;
		case null :
		alert(work.cancel);
		break;
		case 'help' :
		if(workHelp.length == 0){
			alert('정보가 없습니다.');
			}else{
		for(var i = 0; i<workHelp.length; i++){
			console.log(workHelp[i]);
		}
		}
		break;
		case 'num' :
		alert(workHelp.length + '개의 숙제가 있습니다.');
		break;
	}
}
info();

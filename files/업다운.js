const f = Math.floor(Math.random() * 100)
function L(req){
	alert(req)
}
function re(){
	var c = prompt('1~100 사이 입력')
	if(c > f){
		L('더 작습니다.')
		re()
		}
	else if(f > c){
		L('더 큽니다.')
		re()
		}
	else if(f == c){
		L('정답입니다.')
		}
		}
re()
'============js=============='
const 리스트 = []
class 메인 {}
const 거짓 = false
const 참 = true
const 시작하기_버튼을_눌렀을때 = (req) => {
	req()
}
String.prototype.를_말하기 = function(){
	alert(this)
}
Number.prototype.를_말하기 = function(){
	alert(this)
}
String.prototype.를_출력하기 = function(){
	console.log(this)
}
Number.prototype.를_출력하기 = function(){
	console.log(this)
}
const 합치기 = (a,b) => {
	return a + b
}
const 모든_코드_멈추기 = () => {
	throw 'EntJsError : Entjs(이)가 사용자에 의해 중지되었습니다.'
}
const 만일 = (c,If,Else) => {
	if(c) If()
	else Else()
}
const 반복 = (num,act) => {
	for(let i=0;i<num;i++){
		act(i)
	}
}
const 함수 = (name,fn) => {
	if(!fn) delete 메인[name]
	else 메인[name] = fn
}
const 삭제 = target => {
	if(target == undefined || target == null) throw 'EntJsError : 삭제할 수 없습니다.'
	else delete target
}
const 기다리기 = sec => {
	
}
'=============EntJs==========='

시작하기_버튼을_눌렀을때(()=>{
	'아안녕?'.를_말하기()
	})
만일(1 == 5,()=>{
	합치기('맞는','값').를_말하기()
},()=>{
	합치기('틀린','값').를_말하기()
})
숫자 = 0
반복(5,() => {
숫자.를_출력하기()
숫자++
})
함수('안녕',() => {
	alert('안녕')
})
메인.안녕()
함수('안녕',거짓)


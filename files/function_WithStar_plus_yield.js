function* a(){
	yield [0,1]
}
alert(a().next().value)
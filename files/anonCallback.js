function a(b,c){
	c(b)
}
a(1,function(b){
	console.log( b + 1)
})
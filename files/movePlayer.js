var x = "■"
var down = '\n'
var move = prompt('x : ')
var move2 = prompt('y :')
var blank = " "
for(var i=0;i<move;i++){
	if(move < 0){
	x = x + blank}else if(move > 0){
		x = blank + x
	}
}
var $b = (move2 != 0) ? Math.floor(move2 / 4) : 0
for(var i=0;i<$b;i++){
	console.log(down)
}
console.log(x)

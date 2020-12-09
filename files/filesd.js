var Input = {
	Parse : function($) { //화살표함수가 안먹힌다. 일단은 쓰지 말자.
		if($) this.val = $['val'], this.Id = $['id']
	}
}
var R = new Input.Parse({val : prompt(), Id : 172536})
console.log(JSON.stringify(R))

var arr = new Array();
var $ = {
	_plus : function(fst,scd){
		return fst + scd;
	},
	_min : function(fst,scd){
		return fst - scd;
	},
	_usplice : function(fst,scd){
		return fst * scd;
	},
	_splice : function(fst,scd){
		return fst / scd;
	},
	_zcop : function(num,length){
		var k = num;
		for(var i;i<length;i++){
			var k = k * num;
		}
		return k;
		
	}
}

console.log($._zcop(2,3));
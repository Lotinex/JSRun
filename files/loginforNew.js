var JS = {
	setPlayer : function(DIC){
		this.name = DIC['name'];
	},
	leGaL : function($c){
		if($c) return {data : new JS.setPlayer({name : $c})}
	}
};
console.log(JSON.stringify(JS.leGaL('Lotinex').data));

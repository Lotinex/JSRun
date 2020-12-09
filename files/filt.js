var DIC;
var o;
var $ = ['a','b','c','d'];
DIC = prompt();
for(var i;i<$.length;i++){
	if(DIC.indexOf($[i]) != -1){
	DIC = DIC.replaceAll($[i],'*');
	}
}
console.log(DIC);


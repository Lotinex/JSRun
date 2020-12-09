var DIC = {chan : 5}
var CHAN = {}
var $data = {}
for(var j=0;j<DIC['chan'];j++){
	CHAN[j].join = () => {
		DIC.my = {chan : null}
		DIC.my['chan'] = j;
	}
}
var cid = prompt()
if(!CHAN[cid]) return;

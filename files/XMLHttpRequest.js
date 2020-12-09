const s = '/' + '/'
function reqListener () { console.log(this.responseText); } 
var oReq = new XMLHttpRequest(); oReq.addEventListener("load", reqListener); 
oReq.open("GET",`https:${s}google.com`)
oReq.send();
console.log(oReq.readyState)
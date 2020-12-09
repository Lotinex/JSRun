const g = prompt()
/*if(g.indexOf('%btn=') += -1){
let f = g.replace(/\%btn\=/g,"[")
let b = f.replace(/\%/g,']')
}else{*/
const hh = Number(g.split('=')[1].replace('%',''))
 var j = ''
	for(let i=0;i<hh;i++){
		j += '='
	}
	let f = g.replace(/\%b\=/g,j)
	let k = f.replace(/\%/g,'')
	let b = k.replace(/\d/g,'')
//}
console.log(b)
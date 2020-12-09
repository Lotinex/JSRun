String.prototype.addClass = function(req){
	let my = this
	let o = `<div id=%dialog-${req}%>${my}</div>`
let t = 	o.replace(/\%/g,"''"[0])
return t
}
console.log('test'.addClass('testttt'))

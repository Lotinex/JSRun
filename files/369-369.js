ActionNumber : n = 100
ActionLoop : 
for(i=1;i<n+1;i++){
	l = i.toString().match(/3|6|9/g)
	if(l) { console.log('짝'.repeat(l.length))
	continue ActionLoop;
	}
	console.log(i)
}

var l = {x : [1,5], y : [5,11]}
l.giulgi = (l.y[1] - l.y[0]) / (l.x[1] - l.x[0])
//식 : l.y[0] - l.x[0] * l.giulgi
l.sik = `y = ${l.giulgi}x + ${l.y[0] - l.x[0] * l.giulgi}`
console.log(`이 그래프의 식은 ${l.sik}`)

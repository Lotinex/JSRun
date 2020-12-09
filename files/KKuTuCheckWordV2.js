const a = '말기'
const r = new RegExp(`^${a[a.length - 1]}[가-힣]$`)
const f = '기가'
const b = f.match(r) && a != f ? "O" : "X"; //?? a가 f와 일치할 상황이 생겨서는 안 된다.
alert(b) 
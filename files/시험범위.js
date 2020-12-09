const a = console.log
s = '~151 %+ [164-167] &; = !(bumwe)'
let v = s.match(/\&\; \= \!\(\S+\)/g)
let page = s.match(/\[\d+\-\d+\]/g)
let end = s.match(/\~\d+/g)
let plus = s.match(/\%\+/g)


a('문법 인식 :\n')
v.forEach(e => {a(`${e}\n`)})
page.forEach(e => {a(`${e}\n`)})
end.forEach(e => {a(`${e}\n`)})

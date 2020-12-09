const li = String(prompt('비밀번호 입력 : '))
const J = /[0-9]/gi
var f = li.replace(J,"*")
console.log(`비밀번호 : ${f}`)
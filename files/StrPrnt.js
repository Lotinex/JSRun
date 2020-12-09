function strPrnt(str){
let q;
for(var i=0;i<str.length;i++){
q = str.slice(0,i + 1)
console.log(q)
}
}
strPrnt('안녕하세요')
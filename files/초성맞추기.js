const DB = [];
function getChar(str) {
  var result = '';
  for(var i=0; i<str.length; i++) {
   var index = ((str.charCodeAt(i) - 44032) /28) / 21;
    if(index > 0) {
      result += String.fromCharCode(index + 4352);
    } 
  }
  return result;
}
console.log(getChar(str = prompt()))

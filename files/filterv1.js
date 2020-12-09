
var filter = ['a','b'];
var $ = {
    type : '*',
    host : '???'
};
function send(chat){
    for(var i=0;i<filter.length;i++){
        if(chat.indexOf(filter[i]) != -1){
        	var typeTwo = $.type + $.type;
            var returns = chat.replace(filter[i],typeTwo);        
        }
    }
    var chatLog = '[' + $.host + ']' + ' ' + ' : ' +  returns;
    console.log(chatLog);
}
send(chat = prompt());
 

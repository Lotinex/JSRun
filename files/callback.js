function greeting(name){

    alert('반갑습니다. ' + name);

}

 

function processUserInput(callback){

    var name = prompt('이름을 입력해 주세요.');

    callback(name);

}

 

processUserInput(greeting);



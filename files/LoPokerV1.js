function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
var config = {
	useFAlert : false,
	AILevel : 7
};
var myGold; //unable
var xGold; //unable
var useChange; 
var myCard;
var xCard;
var changeLimit = 3;
if(config.useFAlert){
	alert('인디언 포커 AI전에 오신것을 환영합니다.');
	alert('일러두지만,설정을 만지지 않았다면 AI가 굉장히 강할수 있습니다.');
}
alert('당신이 뽑을 차례입니다.');
myCard = getRandom(1,13);
alert('카드를 뽑았습니다.');
alert('상대방이 뽑을 차례입니다.');
xCard = getRandom(1,13);
alert('상대방의 카드는 ' + xCard + '입니다.');
useChange = prompt('자, 카드를 교체하시겠습니까? Y/N');
if(useChange == 'Y'){
	myCard = getRandom(1,13);
	alert('카드를 교체했습니다.');
	}
	alert('상대방의 차례입니다.');
	if(myCard > xCard && getRandom(1,config.AILevel) == 1){
		xCard = getRandom(1,13);
		alert('상대방이 카드를 교체했습니다 : ' + xCard);
	}else{
		alert('상대방이 카드를 교체하지 않았습니다. 카드는 여전히 ' + xCard + '입니다.');
	}
	alert('자 이제,결과를 알려드립니다.');
	if(myCard > xCard){
		alert('당신의 승리입니다. ' + myCard + ' > ' + xCard);
	}else if(xCard > myCard){
		alert('상대방의 승리입니다. ' + xCard + ' > ' + myCard);
		}else if(myCard == xCard){
			alert('무승부입니다! ' + myCard + ' = ' + xCard);
			}
		

var AgeZogun = 13;
var Score = {
	Age : $ => {
		return ($ * (100 / AgeZogun) >= 100) ? 100 : $ * (100 / AgeZogun)
	}
}
console.log(Score.Age(15))
 

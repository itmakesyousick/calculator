console.clear();

var i = 0;
var days = 100;
var capital = 50000;
var benefit_ratio = 0.05;

[...Array(days)].reduce((capital, total) => {
	total = total || capital;
	benefit = Math.round(total * benefit_ratio);
	console.log(total, benefit);
	return total + benefit;
}, capital);

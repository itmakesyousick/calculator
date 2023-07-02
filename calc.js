console.clear();

const DAYS = 100;
const INTEREST_RATE = 0.05;
let capital = 50000;

[...Array(DAYS)].reduce((capital, total) => {
  total = total || capital;
	benefit = Math.round(total * INTEREST_RATE);
	console.log(total, benefit);
	return total + benefit;
}, capital);

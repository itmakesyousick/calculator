console.clear();
const inputCapital = document.getElementById('capital');
const inputRate = document.getElementById('rate');
const tbodyElement = document.getElementsByTagName('tbody')[0];
const rateElement = document.getElementById('rate-number');

inputCapital.addEventListener('input', () => {
	if (/[0-9]+/.test(inputCapital.value)) {
    calc();
  }
});

inputRate.addEventListener('input', () => {
	if (/[0-9.]+/.test(inputRate.value)) {
		calc();
  }
});

calc();

function calc () {
	const days = 100;
	const capital = Number(inputCapital.value);
  const benefit_ratio = Number(inputRate.value);
  const render = renderer(tbodyElement, rateElement, benefit_ratio); 

  [...Array(days)].reduce((capital, total) => {
    total = total || capital;
    benefit = Math.round(total * benefit_ratio);
    lot = benefit / (30 * 1000);
    render(total, benefit, lot);
    return total + benefit;
  }, capital);
}

function renderer (tbodyElement, rateContainer, benefit_ratio) {
	tbodyElement.innerHTML = '';
  rateElement.textContent = (benefit_ratio * 100) + '%';

  return (total, benefit, lot) => {
    row = document.createElement('tr');
    row.innerHTML = `
      <td>¥${total.toLocaleString()}</td>
      <td>¥${benefit.toLocaleString()}</td>
      <td title="${Math.round(lot*100000)}">${lot.toFixed(2)}</td>
    `;
    tbodyElement.appendChild(row);
  }
}

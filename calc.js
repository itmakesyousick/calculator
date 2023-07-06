console.clear();
const inputCapital = document.getElementById('capital');
const inputRate = document.getElementById('rate');
const inputCuota = document.getElementById('quota');
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
  const quata_pips = Number(inputCuota.value);
  const initialCapital = Number(inputCapital.value);
  const benefit_ratio = Number(inputRate.value);
  const render = renderer(tbodyElement, rateElement, benefit_ratio); 
  let i = 0;

  [...Array(days)].reduce((capital, total) => {
    total = total || capital;
    benefit = Math.round(total * benefit_ratio);
    lot = benefit / (quata_pips * 1000);
    render(++i, total, benefit, lot, initialCapital);
    return total + benefit;
  }, initialCapital);
}

function renderer (tbodyElement, rateContainer, benefit_ratio) {
  tbodyElement.innerHTML = '';
  rateElement.textContent = (benefit_ratio * 100) + '%';

  return (index, total, benefit, lot, initialCapital) => {
    row = document.createElement('tr');
    row.innerHTML = `
      <td><small>${index}</small></td>
      <td>¥${total.toLocaleString()}</td>
      <td>¥${benefit.toLocaleString()}</td>
      <td title="${Math.round(lot*100000)}">${lot.toFixed(2)} ・ ${Math.round(lot*100000)}</td>
      <td>¥${(total - initialCapital).toLocaleString()}</td>
    `;
    tbodyElement.appendChild(row);
  }
}

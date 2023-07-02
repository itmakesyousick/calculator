console.clear();
var tbody = document.getElementsByTagName('tbody')[0]
var rateHtml = document.getElementById('rate');

var i = 0;
var days = 100;
var capital = 50000;
var benefit_ratio = 0.05;

rateHtml.textContent = (benefit_ratio * 100) + '%';

[...Array(days)].reduce((capital, total) => {
  total = total || capital;
  benefit = Math.round(total * benefit_ratio);
  lot = benefit / (30 * 1000);
  render(total, benefit, lot);
  return total + benefit;
}, capital);

function render (total, benefit, lot) {
  //console.log(total, benefit);
  row = document.createElement('tr');
  row.innerHTML = `
    <td>¥${total.toLocaleString()}</td>
    <td>¥${benefit.toLocaleString()}</td>
    <td title="${Math.round(lot*100000)}">${lot.toFixed(2)}</td>
  `;
  tbody.appendChild(row);
}

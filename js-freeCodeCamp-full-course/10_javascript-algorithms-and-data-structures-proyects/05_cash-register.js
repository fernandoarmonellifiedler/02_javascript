/* Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	     Amount
Penny	             $0.01 (PENNY)
Nickel	             $0.05 (NICKEL)
Dime	             $0.1 (DIME)
Quarter	             $0.25 (QUARTER)
Dollar	             $1 (ONE)
Five Dollars         $5 (FIVE)
Ten Dollars	         $10 (TEN)
Twenty Dollars	     $20 (TWENTY)
One-hundred Dollars	 $100 (ONE HUNDRED)


See below for an example of a cash-in-drawer array: 

[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]
*/
function checkCashRegister(price, cash, cid) {
  const currencyList = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'ONE', value: 1 },
    { name: 'FIVE', value: 5 },
    { name: 'TEN', value: 10 },
    { name: 'TWENTY', value: 20 },
    { name: 'ONE HUNDRED', value: 100 },
  ];
  // convierte lista en objeto
  const cashInDrawer = cid.map((item) => {
    return { name: item[0], value: item[1] };
  });
  // total en caja
  const cashTotal = cashInDrawer
    .reduce((total, item) => total + item.value, 0)
    .toFixed(2); // 335.41
  // cambio
  const cambio = cash - price; // 0.5
  // cash-in-drawer is less than the change due
  if (cashTotal < cambio) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  // find lower currency
  let lowerCurrency = ''; // QUARTER
  for (let i = 0; i < currencyList.length; i++) {
    if (cambio > currencyList[i].value && cambio < currencyList[i + 1].value) {
      lowerCurrency = currencyList[i].name.toUpperCase();
    }
  }
  // check amount of lower currency // [ 4.25 ]
  let amount = cashInDrawer
    .filter((item) => item.name === lowerCurrency)
    .map((item) => item.value);

  if (amount > cambio) {
    return { status: 'OPEN', change: [[lowerCurrency, cambio]] };
  }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

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
let currencyList = [
  { name: 'ONE HUNDRED', value: 100 },
  { name: 'TWENTY', value: 20 },
  { name: 'TEN', value: 10 },
  { name: 'FIVE', value: 5 },
  { name: 'ONE', value: 1 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.1 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  // convierte lista en array
  let arrConverted = cid.map((item) => {
    return [item[0], item[1]];
  }).reverse();

  // =======================
  // Funciones
  // =======================
  // funcion => total en caja
  const cashInDrawer = (arr) =>
    arr.reduce((total, item) => total + item[1], 0).toFixed(2);
  // funcion => find lower currency
  const findLowerCurrency = (arr, cambioNum) => {
    for (let i = 0; i < arr.length; i++) {
      if (cambioNum > arr[i].value) {
        return arr[i].name.toUpperCase();
      }
    }
  };
  // funcion => amount of lower currency
  const amountOfCurrency = (arr, currency) =>
    arr.filter((item) => item[0] === currency).map((item) => item[1]);
  // funcion => cantidad de billetes de lower currency
  const amountOfBills = (billValue, total) => {
    let maxValue = 0;
    while (maxValue <= total && maxValue + billValue < total) {
      maxValue += billValue;
    }
    return maxValue;
  };
  // funcion => valor del billete
  const billValue = (billName) =>
    currencyList
      .filter((item) => item.name === billName)
      .map((item) => item.value);

  // =======================
  // App
  // =======================
  let status = '';
  let change = [];

  // total en caja y cambio a dar
  let cashTotal = cashInDrawer(arrConverted); 
  let cambio = cash - price; // 96.74

  // ===== Despejar lo más sencillo ======
  // check if cash-in-drawer is less than the change due
  if (cashTotal < cambio) {
    return { status: 'INSUFFICIENT_FUNDS', change: change };
  }
  // check if cash-in-drawer is the same as the change due
  if (cashTotal == cambio) {
    return { status: 'CLOSED', change: arrConverted };
  }
  // ===== (cashTotal > cambio) =====
    let lowerCurrency = findLowerCurrency(currencyList, cambio);
    let amountLowerCurr = amountOfCurrency(arrConverted, lowerCurrency);
  
    if (amountLowerCurr > cambio) {
      let currBillValue = billValue(lowerCurrency);
      let maxValueOnCurrency = amountOfBills(...currBillValue, cambio);
      let restOfCurr = amountLowerCurr - maxValueOnCurrency;
      status = 'OPEN';
      // add item to change
      change.push([lowerCurrency, maxValueOnCurrency]);
      // alter array
      let newArr = arrConverted.map((item) =>
        item[0] === lowerCurrency ? [lowerCurrency, (item[1] = restOfCurr)] : item
      );
      arrConverted = newArr;
      // update cambio
      cambio = (cambio - maxValueOnCurrency).toFixed(2);
    }

  return { status: status, change: change };
}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);

// checkCashRegister(19.5, 20, [
//   ['PENNY', 1.01],
//   ['NICKEL', 2.05],
//   ['DIME', 3.1],
//   ['QUARTER', 4.25],
//   ['ONE', 90],
//   ['FIVE', 55],
//   ['TEN', 20],
//   ['TWENTY', 60],
//   ['ONE HUNDRED', 100],
// ]);

// let currencyList = [
//   { name: 'PENNY', value: 0.01 },
//   { name: 'NICKEL', value: 0.05 },
//   { name: 'DIME', value: 0.1 },
//   { name: 'QUARTER', value: 0.25 },
//   { name: 'ONE', value: 1 },
//   { name: 'FIVE', value: 5 },
//   { name: 'TEN', value: 10 },
//   { name: 'TWENTY', value: 20 },
//   { name: 'ONE HUNDRED', value: 100 },
//   { name: 'MORE', value: 99999 },
// ];
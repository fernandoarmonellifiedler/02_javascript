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
  let currencyList = [
    { name: 'PENNY', value: 0.01 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'DIME', value: 0.1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'ONE', value: 1 },
    { name: 'FIVE', value: 5 },
    { name: 'TEN', value: 10 },
    { name: 'TWENTY', value: 20 },
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'MORE', value: 99999 },
  ];
  // convierte lista en array
  let arrConverted = cid.map((item) => {
    return [item[0], item[1]];
  });
  // funcion => total en caja
  const cashInDrawer = (arr) =>
    arr.reduce((total, item) => total + item[1], 0).toFixed(2);
  // funcion => find lower currency
  const findLowerCurrency = (arr, cambioNum) => {
    for (let i = 0; i < arr.length; i++) {
      if (cambioNum > arr[i].value && cambioNum < arr[i + 1].value) {
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
    while (maxValue <= total && (maxValue + billValue) < total) {
        maxValue += billValue
    }
    return maxValue;
  };
  // funcion => valor del billete
  const billValue = (billName) => currencyList.filter(item => item.name === billName).map(item => item.value)

  // =======================
  // App
  // =======================
  let status = '';
  let change = [];
  let lowerCurrency = '';
  let amountLowerCurr = 0;

  // total en caja
  let cashTotal = cashInDrawer(arrConverted);
  // cambio
  let cambio = cash - price; // 96.74
  // console.log(cashTotal, cambio);

  // check if cash-in-drawer is less than the change due
  if (cashTotal < cambio) {
    // status = 'INSUFFICIENT_FUNDS';
    // change = change;
    return { status: 'INSUFFICIENT_FUNDS', change: change };
  }
  
  // find lower currency
  lowerCurrency = findLowerCurrency(currencyList, cambio);
  // check amount of lower currency // [ 60 ]
  amountLowerCurr = amountOfCurrency(arrConverted, lowerCurrency);
  // console.log(...amountLowerCurr, cambio);
  if (amountLowerCurr > cambio) {
    status = 'OPEN';
    let currBillValue = billValue(lowerCurrency)
    let maxValueOnCurrency = amountOfBills(...currBillValue, cambio);
    change.push([lowerCurrency, maxValueOnCurrency]);
    //-----------
    let restOfCurr = amountLowerCurr - maxValueOnCurrency;
    
    let newArr = arrConverted.map(item => item[0] === lowerCurrency ? [lowerCurrency, item[1] = restOfCurr] : item )
    arrConverted = newArr;
    console.log(arrConverted);
  }
  // console.log(change);
  // else if (amountLowerCurr < cambio) {
  //   change = change.push([lowerCurrency, ...amountLowerCurr]);
  //   let newArr = arrConverted.filter((item) => item[0] !== lowerCurrency);
  //   arrConverted = newArr;
  //   let newCurrencyList = currencyList.filter(
  //     (item) => item.name !== lowerCurrency
  //   );
  //   currencyList = newCurrencyList;
  //   cambio = (cambio - amountLowerCurr).toFixed(2);
  // }

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
    ['TWENTY', 100],
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

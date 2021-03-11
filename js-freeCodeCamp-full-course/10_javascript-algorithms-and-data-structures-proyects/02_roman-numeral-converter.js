/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. 

https://www.mathsisfun.com/roman-numerals.html
*/

// partial solution (faltan los 9 y 4)
function convertToRoman(num) {
  const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const romanArr = [1, 5, 10, 50, 100, 500, 1000];
  const selectedNumbers = [];
  let newNum = num;

  for (let i = 0; i < romanArr.length ; i++) {
    if (newNum >= romanArr[i] && newNum < romanArr[i + 1]) {
      selectedNumbers.push(romanArr[i]);
      newNum = newNum - romanArr[i];
      i = -1;
    }
  }

  const findIndex = selectedNumbers.map((item) => {
    return romanArr.indexOf(item);
  });

  let convertNums = '';
  for (let i in findIndex) {
    convertNums += romanNumerals[findIndex[i]];
  }

  console.log('selected Nums: ',selectedNumbers);
  console.log('index of selected: ', findIndex);
  console.log(convertNums);
  return convertNums;
}

convertToRoman(36);

// another solution in progress

function convertToRoman(num) {
  const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const romanArr = [1, 5, 10, 50, 100, 500, 1000];
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let index = 0;
  let rest = 0;

  let finalRomanNum = '';

  for (let i = 0; i < romanArr.length; i++) {
    if (num > romanArr[i]) {
      result = romanArr[i];
      index = i;
      rest = num - romanArr[i];
      finalRomanNum += romanNumerals[i];
    }
  }

  console.log(result, index, rest);
  return finalRomanNum;
}

console.log(convertToRoman(4));
console.log(convertToRoman(9));
console.log(convertToRoman(16));



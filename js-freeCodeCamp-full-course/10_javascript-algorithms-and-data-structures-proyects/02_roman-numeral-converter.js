/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. 

https://www.mathsisfun.com/roman-numerals.html
*/

function convertToRoman(num) {
  const romanNumerals = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
  ];
  const romanArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const selectedNumbers = [];
  let newNum = num;

  for (let i = 0; i < romanArr.length; i++) {
    if (newNum >= romanArr[i] && newNum >= 1000) {
      selectedNumbers.push(1000);
      newNum = newNum - 1000;
      i = -1;
    } else if (newNum >= romanArr[i] && newNum < romanArr[i + 1]) {
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

  console.log('selected Nums: ', selectedNumbers);
  console.log('index of selected: ', findIndex);
  console.log(convertNums);
  return convertNums;
}

convertToRoman(900);

/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. 

https://www.mathsisfun.com/roman-numerals.html
*/

// in progress solution

function convertToRoman(num) {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const romanArr = [1, 5, 10, 50, 100, 500, 1000];
    let numSelected = [];

    function determ(num) {
        for (let i = 0; i < romanArr.length; i++) {
            if (num > romanArr[i]) {
                numSelected.push(romanArr[i]);
            }
        }
    }
    determ(num);
    console.log(numSelected)



    return num;
}

//convertToRoman(36);

console.log(convertToRoman(2))
console.log(convertToRoman(9))
//console.log(convertToRoman(16))


// another solution in progress

function convertToRoman(num) {
    const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const romanArr = [1, 5, 10, 50, 100, 500, 1000];
    const romanObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;
    let index = 0;
    let rest = 0

    let finalRomanNum = '';

    for (let i = 0; i < romanArr.length; i++) {
        if (num > romanArr[i]) {
            result = romanArr[i];
            index = i;
            rest = num - romanArr[i];
            finalRomanNum += romanNumerals[i];
        }
    }


    console.log(result, index, rest)
    return finalRomanNum;
}

console.log(convertToRoman(4))
console.log(convertToRoman(9))
console.log(convertToRoman(16))

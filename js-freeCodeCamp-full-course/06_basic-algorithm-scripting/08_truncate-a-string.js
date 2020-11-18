/* Truncate a String:
- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending. */

function truncateString(str, num) {
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/* 
function truncateString(str, num) {
  let stringArr = str.split('');
  let arrLength = stringArr;
  
  while (arrLength > num) {
    stringArr.pop();
    arrLength--
  }
  return stringArr.join('')+'...';

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

function truncateString(str, num) {
  let stringArr = str.split('');
  let counter = stringArr.length;
  console.log(counter);

  if (counter > num) {
    stringArr.pop();
    counter--
    return stringArr.join('')+'...';
  } else {
    stringArr.pop();
    counter--
    return stringArr.join('');
  }
  
}
*/
/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function high(x){
  if (x.length == 1 ) return x;
  let alphabet = ['indexCero', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let separatedWords = x.split(' ');
  let values = separatedWords.map(word => {
    let sumOfWords = 0;
    let splittedWord = word.split('');
    for (let i in splittedWord) {
      sumOfWords += alphabet.indexOf(splittedWord[i])
    }
    return sumOfWords
  });
  let maxValue = Math.max(...values)
  let indexOfMaxValue = values.indexOf(maxValue)
  return separatedWords[indexOfMaxValue]
}
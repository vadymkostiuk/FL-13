const LETTER_COUNT = (str, letter) => str.toLowerCase().split(letter).length - 1;

console.log(LETTER_COUNT('Barry', 'b'));
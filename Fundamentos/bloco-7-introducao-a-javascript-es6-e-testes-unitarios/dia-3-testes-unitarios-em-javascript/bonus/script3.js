// Bônus 3
// Escreva a função removeMiddle para passar nos testes já implementados.

const assert = require('assert');

const removeMiddle = (array) => {
  const stringMeio = Math.floor(array.length/2);
  let array2 = [];
  array2.push(array[stringMeio]);
  array.splice(stringMeio, 1);
  return array2;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
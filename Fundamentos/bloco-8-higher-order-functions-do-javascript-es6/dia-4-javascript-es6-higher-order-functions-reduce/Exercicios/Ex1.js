const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // .reduce adiciona o elemento ao acumulador
  // metodo .concat concatena arrays
  return arrays.reduce((acumulador, elemento) => acumulador.concat(elemento))
}
console.log(flatten())

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
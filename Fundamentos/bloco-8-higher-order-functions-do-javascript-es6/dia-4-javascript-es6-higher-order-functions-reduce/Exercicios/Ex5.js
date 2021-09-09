const assert = require('assert');
const { emit } = require('process');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  return names.reduce((acumulador, elemento) => acumulador + elemento.split('').reduce((acumulador2, elemento2) => {
    if (elemento2 === 'a' || elemento2 === 'A') {
      return acumulador2 += 1
    }
    return acumulador2
  }, 0), 0)
}

assert.deepStrictEqual(containsA(), 20);
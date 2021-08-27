// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const qualquerCoisa = (numero) => {
  let fatorial = 1
  for (let i = 1; i <= numero; i += 1) {
    fatorial *= i;
  }
  return fatorial;
}

console.log(qualquerCoisa(5));

// resolvendo de maneira recursiva

const recursiva = numero => numero > 1 ? numero * recursiva(numero - 1) : 1;
console.log(recursiva(5))

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// Copiar
//       longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const maiorPlavara = (string) => {
  let separado = string.split(' ');
  let maisLetras = separado[0] 
  for (let elemento of separado) {
    if (elemento.length > maisLetras.length) {
      maisLetras = elemento;
    }
  }
  return maisLetras;
}

console.log(maiorPlavara("Antônio foi no banheiro e não sabemos o que aconteceu"))
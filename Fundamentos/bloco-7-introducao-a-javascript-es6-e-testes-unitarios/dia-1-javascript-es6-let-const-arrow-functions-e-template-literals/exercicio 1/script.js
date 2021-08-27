const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log`${ifScope} o que estou fazendo aqui ? :O`; // Se necessário esta linha pode ser removida.
}

testingScope(true);

// exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
 return oddsAndEvens.sort((a, b) => a-b); // sort(function(a, b){return a-b});
}

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7;
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// }

const ordemCrescente = sortOddsAndEvens()

console.log(`Os Nummeros ${ordemCrescente} se encontram ordenados de forma crescente!`);

console.log('Os Nummeros' + ordemCrescente + 'se encontram ordenados de forma crescente!');
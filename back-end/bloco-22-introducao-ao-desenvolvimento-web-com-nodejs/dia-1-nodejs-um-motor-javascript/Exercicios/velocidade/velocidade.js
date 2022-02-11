// const readline = require('readline-sync');

// function calculaVelocidadeMed () {
//   const distancia = readline.questionInt('Distância percorrida (m): ');
//   const tempo = readline.questionInt('Tempo gasto (s): ');
  
//   const velocidadeMedia = (distancia / tempo).toFixed(2);

//   console.log(`Velocidade média: ${velocidadeMedia} m/s`);
// }

// calculaVelocidadeMed();

function subtract(...[a, b]) {
  return a - b;
}

function test () {
  setTimeout(function(){console.log(2)}, 500);
  console.log(1);
  setTimeout(function(){console.log(3)}, 1000);
  setTimeout(function(){console.log(4)}, 0);
  console.log(6);
  setTimeout(function(){console.log(5)}, 2000);
  }

  test()

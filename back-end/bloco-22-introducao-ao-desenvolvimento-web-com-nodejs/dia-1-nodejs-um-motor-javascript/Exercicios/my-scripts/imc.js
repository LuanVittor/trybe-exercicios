const readline = require('readline-sync');

const PESO = readline.questionFloat('Qual seu peso(KG)? '); 
const ALTURA= readline.questionInt('Qual sua altura(cm)? '); 

function calculaImc () {
  const imc = ([PESO] / Math.pow(ALTURA / 100, 2)).toFixed(2);
  console.log(`Peso: ${[PESO]}, Altura: ${ALTURA}`);
  console.log(`IMC: ${imc}`);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
}

calculaImc();
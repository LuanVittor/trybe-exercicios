function menorValor(array){
  let menorNumero = 0;
  for(let index in array){
    if (array[menorNumero] > array[index]){
      menorNumero = index;
    }
  }
  return menorNumero;
}

console.log(menorValor([2, 3, 6, 7, 10, 1]))
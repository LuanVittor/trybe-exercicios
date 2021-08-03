function menorValor(array){
  let maiorNumero = 0;
  for(let index in array){
    if (array[maiorNumero] < array[index]){
      maiorNumero = index;
    }
  }
  return maiorNumero;
}

console.log(menorValor([2, 3, 6, 7, 10, 1]))
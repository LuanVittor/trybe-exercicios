function repete(numeros){
  let vezesRepete = 0
  for(let index in numeros){
    if(numeros[index] === numeros){
      vezesRepete = vezesRepete + 1;
    }
  }
  return; vezesRepete
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]))
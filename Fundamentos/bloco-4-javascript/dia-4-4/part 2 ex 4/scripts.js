function maisLetras(array){
  let maisCaracteres = array[0]
  for (let index in array){
    if (maisCaracteres.length < array[index].length){
      maisCaracteres = array[index]
    }
  }
  return maisCaracteres;
}

console.log(maisLetras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
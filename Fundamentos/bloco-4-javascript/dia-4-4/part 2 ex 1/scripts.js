function palindromo(palavra){
  let reverse = palavra.split('').reverse().join('');
  if (reverse === palavra){
    return true;
  }else{
    return false;
  }
}

console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));
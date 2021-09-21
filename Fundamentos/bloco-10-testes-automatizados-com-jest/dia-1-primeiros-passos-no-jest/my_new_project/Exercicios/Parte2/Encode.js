function encode(string) {
  let frase = string.split('')
  for (let index in frase) {
    switch (frase[index]) {
    case 'a':
      frase[index] = 1;
      break;
    case 'e':
      frase[index] = 2;
      break;
    case 'i':
      frase[index] = 3;
      break;
    case 'o':
      frase[index] = 4;
      break;
    case 'u':
      frase[index] = 5;
      break;
    default:
      break;
    }
  }
  return frase.join('');
}

function decode(string) {
  let frase = string.split('')
  for (let index in frase) {
    switch (frase[index]) {
      case '1':
        frase[index] = 'a';
        break;
      case '2':
        frase[index] = 'e';
        break;
      case '3':
        frase[index] = 'i';
        break;
      case '4':
        frase[index] = 'o';
        break;
      case '5':
        frase[index] = 'u';
        break;
      default:
        break;
    }
  }
  return frase.join('');
}

module.exports = {encode, decode}
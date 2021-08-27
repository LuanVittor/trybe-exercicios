let frase = "Tryber x aqui!";

const findX = (string) => {
  fraseDiv = frase.split(' ');
  for (let i = 0; i < fraseDiv.length; i += 1) {
    if (fraseDiv[i] === 'x') {
      fraseDiv[i] = string;
    }
  }
  return fraseDiv.join(' ');
}

const array = ["CSS", "HTML", "JS", "UNIX", "BASH"];

const habilidades = param => {
  array.sort();
  const junto = array.join(', ');
  return `${param} Minhas cinco principais habilidades são: ${array}`;
}

console.log(habilidades(findX('luan')));

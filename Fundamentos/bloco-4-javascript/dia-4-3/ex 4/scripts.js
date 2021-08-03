let numbers = 5;
let linha = ''
let asterisco = '*'
let position = numbers;

for(let i = 0; i < numbers; i += 1){
  for(let index = 0; index <= numbers; index += 1){
    if(index < position){
      linha = linha + ' ';
    } else {
      linha = linha + asterisco + asterisco;
    }
  }
  console.log(linha)
  linha = '';
  position -= 1;
};
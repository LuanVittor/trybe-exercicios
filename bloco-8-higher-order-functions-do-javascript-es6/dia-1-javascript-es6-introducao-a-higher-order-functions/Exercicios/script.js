// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com 

const funcionario = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` }
}
// console.log(funcionario('Luan Vitor Coelho'));

const newEmployees = (funcionario) => {
  const employees = {
    id1: funcionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(funcionario));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkWinner = (urNumber, number) => urNumber === number;

const lottery = (urNumber, funcao) => {
  let number = Math.floor((Math.random() * 5) + 1);
  return funcao(urNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente'
}

console.log(lottery(2, checkWinner));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const percorre = (gabaritoIndex, estudanteIndex) => {
  if (gabaritoIndex === estudanteIndex) return 1;
  if (estudanteIndex === 'N.A') return 0;
  if (gabaritoIndex !== estudanteIndex) return -0.5;
}

const checkNote = (gabarito, estudante, func2) => {
  let nota = 0;
  for (let i = 1; i < gabarito.length; i += 1) {
    nota += func2(gabarito[i], estudante[i])
  }
  return nota;
}


  console.log(checkNote(RIGHT_ANSWERS, STUDENT_ANSWERS, percorre));

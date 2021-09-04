// Use o array `estudantes` para os exercícios a seguir:

// 1- Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.



// 2- Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

const estudantes = [
  {
    nome: 'Henrique Baêta',
    projeto: 'Trybewarts',
    status: 88,
  },
  {
    nome: 'Rodrigo da Rosa',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Gabrielle Martines',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Isaac Batista',
    projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Ana Duarte',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Jéssica Lopes',
    projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald Lima',
    projeto: 'Trybewarts',
    status: 75,
  },
]
// ex 1
estudantes.sort(function (a, b) {
  if (a.nome > b.nome) {
    return 1;
  }
  if (a.nome < b.nome) {
    return -1;
  }
  return 0;
});

console.log(estudantes);

console.log(estudantes.sort((a, b) => a.status - b.status));


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turnoManha = (obj, key, value) => {
  obj[key] = value;
}

turnoManha(lesson2, 'turno', 'manha')
console.log(lesson2)

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const tamanho = (obj) => Object.keys(obj).length;
console.log(tamanho(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valores = (obj) => Object.values(obj);
console.log(valores(lesson3));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const alunos1 = allLessons.lesson1.numeroEstudantes;
const alunos2 = allLessons.lesson2.numeroEstudantes;
const alunos3 = allLessons.lesson3.numeroEstudantes;

const somaAlunos = () => alunos1 + alunos2 + alunos3;
console.log(somaAlunos())

// Crie uma função que obtenha o valor da key de acordo com a sua posição no objeto.

const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log(getValueByNumber(lesson3, 2));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const checkPair = (obj, key, value) => {
  let objArray = Object.entries(obj)
  let igual = false;
  for (let i in objArray) {
    if (objArray[i][0] === key && objArray[i][1] === value) {
      igual = true;
    }
  }
  return igual;
}

console.log(checkPair(lesson3, 'materia', 'Matemática'));

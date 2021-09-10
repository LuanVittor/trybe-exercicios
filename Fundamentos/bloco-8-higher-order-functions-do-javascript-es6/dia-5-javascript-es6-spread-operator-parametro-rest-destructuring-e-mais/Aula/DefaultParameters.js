// const greeting = (user) => {
//   const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//   console.log(`Welcome ${userDisplay}!`);
// };

// greeting();  Welcome usuário!

// // ou 

// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting();  Welcome usuário!

// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  return number * value
};

console.log(multiply(8));
//ex 1
let player = {
  name:'Marta',
  lastName:'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: 
    [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log('a jogadora ' + player.name + ' ' + player.lastName + ' ' + 'e tem ' + player.age + ' anos de idade')

console.log('a Jogadora ' + player.name + ' ' + player.lastName + ' ' + 'foi elita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes')

console.log('a Jogadora possui ' + player.medals.golden + ' de ouro e ' + player.medals.silver + ' de prata')

//ex 2

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for( index in names){
  console.log('ola ' + names[index])
}

//ex 3

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(index in car){
  console.log(index, car[index])
}

//ex 4
var statusCarro = "desligado";

function ligarDesligar(){
  if(statusCarro === "desligado"){
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
}
ligarDesligar()

console.log(statusCarro);

//ex 5

// Adição
let a = 5;
let b = 2;

a + b;
 //isso vira em funcao 
function sum(a, b) {
  return a + b;
}
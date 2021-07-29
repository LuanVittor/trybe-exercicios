let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1){
  resultado += numbers[i];
}
console.log(resultado/numbers.length)

// ou outra maneira de fazer

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   resultado += numbers[i];
// }
// let media = resultado/numbers.length

// console.log(media)
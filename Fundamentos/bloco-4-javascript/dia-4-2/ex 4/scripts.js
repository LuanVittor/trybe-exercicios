let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i += 1){
  resultado += numbers[i];
}
let media = resultado/numbers.length

console.log(media)

if(media >= 20){
  console.log("maior q 20")
} else {
  console.log("menor q 20")
}
import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`a area do losango eh ${ Exercise.losangle(32, 18) }`)
console.log(`a area do losango 2 eh ${ Exercise.losangle(200, 50) }`)
console.log(`a area do losango 3 eh ${ Exercise.losangle(75, 25) }`)

console.log(`a area do trapezio eh ${Exercise.trapezio(100, 70, 50)}`)
console.log(`a area do trapezio 2 eh ${Exercise.trapezio(75, 50, 35)}`)
console.log(`a area do trapezio 3 eh ${Exercise.trapezio(150, 120, 80)}`)

console.log(`a area do circulo eh ${ Exercise.circle(25) }`)
console.log(`a area do circulo eh ${ Exercise.circle(100) }`)
console.log(`a area do circulo eh ${ Exercise.circle(12.5) }`)


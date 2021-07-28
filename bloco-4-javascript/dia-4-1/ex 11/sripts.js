let bruto = 3000;
let inss;
let ir;

if (bruto <= 1556.94){
  inss = bruto*0.08;
} else if (bruto <= 2594.92){
  inss = bruto*0.09;
}else if (bruto <=5189.82){
  inss =bruto*0.11;
}else{
  inss = 570.88;
}

let semiliquido = bruto-inss

if (semiliquido <= 1903.38){
  ir = 0
} else if (semiliquido <= 2826.66){
  ir = (semiliquido*0.075)-142.8; 
} else if (semiliquido <= 3751.06){
  ir = (semiliquido*0.15)-354.80;
} else if (semiliquido <= 4664.68){
  ir = (semiliquido*0.225)-636.13;
}else{
  ir = (semiliquido*0.275)-869.36
}

console.log(semiliquido-ir)
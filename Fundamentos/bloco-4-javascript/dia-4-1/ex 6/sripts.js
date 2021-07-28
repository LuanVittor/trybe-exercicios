let pecaXadrez = "REI";

switch (pecaXadrez.toLowerCase()){
  case "torre":
    console.log("torre ->reto");
    break;

  case "piao":
    console.log("piao ->1  casa e 2 casas no 1 movimentos");
    break;

  case "bispo":
    console.log("bispo -> diagonal");
    break;  

  case "rei":
   console.log("rei -> para todas as direcoes");
    break;  

  case "cavalo":
    console.log("cavalo -> movimento em L");
    break; 

  case "rainha":
    console.log("rainha -> 1 casa todas as direcoes");
    break;     

  default:
    console.log("erro");
    break;
};
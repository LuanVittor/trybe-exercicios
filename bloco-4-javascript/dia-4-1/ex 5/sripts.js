let a = 35;
let b = 70;
let c = 75;
let abc = a + b + c

if (abc === 180){
  console.log("true");
} else if (abc > 0 && abc < 180){
  console.log("false");
} else if (abc > 180){
  console.log("false");
} else {
  console.log("inavlido");
}
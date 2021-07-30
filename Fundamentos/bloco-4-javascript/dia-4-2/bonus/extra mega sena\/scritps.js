let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let num = Math.floor(Math.random()*7 + 1);
  megaSenaNumbers.push(num);
  for (let i = 0; i < megaSenaNumbers.length - 1; i += 1) {    
    if (num === megaSenaNumbers[i]){
      megaSenaNumbers.pop();
      index -= 1;
    }
  }  
}

console.log(megaSenaNumbers);
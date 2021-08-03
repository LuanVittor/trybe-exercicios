let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O ultimo MacPatinhas',
  recorrente: 'sim',
};

for(index in info){}
for(index in info2){
  if(info[index] === 'sim' && info2[index] === 'sim'){
  console.log('ambos sao iguais')
  } else {
  console.log(info[index] + ' e ' + info2[index])
  }
}

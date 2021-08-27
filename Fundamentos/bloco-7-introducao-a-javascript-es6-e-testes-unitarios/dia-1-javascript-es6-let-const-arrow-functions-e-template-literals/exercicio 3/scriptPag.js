const botao = document.getElementById('botao');
const p = document.querySelector('#counter');
let contagem = 0;

botao.addEventListener('click', () => {
  p.innerText = contagem += 1;
});
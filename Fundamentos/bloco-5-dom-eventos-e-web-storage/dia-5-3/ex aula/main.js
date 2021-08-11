const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let liArmazen = document.getElementsByTagName("li");
for (let i of liArmazen) {
  i.addEventListener("click", addClas);
}

function addClas(event) {
  let removeClass = document.querySelector(".tech");
  removeClass.classList.remove("tech");
  event.target.className = "tech"
  }


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
  let textInput = document.getElementById("input");
  textInput.addEventListener("input", change);
  function change() {
    for (let index of liArmazen) {
      if (index.className === "tech") {
        index.innerText = textInput.value
      }
    }
  }


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let top3 = document.getElementById("mySpotrybefy");
top3.addEventListener("dblclick", newWindow);
function newWindow(){
  top3 = window.location.href = "https://luanvittor.github.io/";
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
top3.addEventListener("mouseover" , color);
top3.addEventListener("mouseout", reset)
function color(){
  top3.style.color = "green"
}
function reset(){
  top3.style.color = "white"
}

// function resetText(event) {
// //   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
// //   // O event possui várias propriedades, porém a mais usada é o event.target,
// //   // que retorna o objeto que disparou o evento.
// // }

// firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'
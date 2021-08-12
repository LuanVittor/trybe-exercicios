function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  let ul = document.querySelector("#days");

  for (let i in dezDaysList) {
    let li = document.createElement("li");
    let day = dezDaysList[i];

    if (day === 24 | day === 31) {
      li.className = "day holiday";
      li.innerText = day;
      ul.appendChild(li);
    } else if (day === 4 | day === 11 | day === 18) {
      li.className = "day friday";
      li.innerText = day;
      ul.appendChild(li);
    } else if (day === 25) {
      li.className = "day friday and holiday";
      li.innerText = day;
      ul.appendChild(li);
    } else {
      li.className = "day";
      li.innerText = day;
      ul.appendChild(li);
    }
  };
};
calendarDays()

//Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function button(nome) {
  let btnConteiner = document.querySelector(".buttons-container")
  let botao = document.createElement("button");
  botao.innerHTML = nome;
  botao.id = "btn-holiday";
  btnConteiner.appendChild(botao);
};
button("Feriado")

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let botao = document.getElementById("btn-holiday");
let holidays = document.getElementsByClassName("holiday");
botao.addEventListener("click", feriado);
let painted = false;

function feriado() {
  if (painted === false) {
    for (let index of holidays) {
      index.style.backgroundColor = "red";
      painted = true;
    }
  } else {
    for (let index of holidays) {
      index.style.backgroundColor = "rgb(238, 238, 238)";
      painted = false;
    }
  };;
};

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function button2(name) {
  let btnConteiner = document.querySelector(".buttons-container")
  let botao = document.createElement("button");
  botao.innerHTML = name;
  botao.id = "btn-friday";
  btnConteiner.appendChild(botao);
};
button2("Sexta-Feira")


// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let fridayButton = document.getElementById("btn-friday");
let friday = document.getElementsByClassName("friday");
fridayButton.addEventListener("click", changeFridayText);
let normal = true;
function changeFridayText() {
  if(normal === true) {
for(let index of friday) {
    index.innerText = "It's Friday";
    normal = false;
}
  } else {
    let modifyNumbers = [4, 11, 18, 25];
    for(let index = 0; index < modifyNumbers.length; index += 1) {
    friday[index].innerText = modifyNumbers[index];
    normal = true;
  }
}
}


// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
let days = document.querySelector('#days');
days.addEventListener('mouseover', numberZoomIn)

function numberZoomIn(event) {
 event.target.style.fontSize = '30px';
};

days.addEventListener('mouseout', numberZoomOut)
function numberZoomOut(event) {
  event.target.style.fontSize = '20px';
 };


// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTask(string) {
  let task = document.createElement("span");
  let taskPai = document.querySelector(".my-tasks");
  task.innerText = string;
  taskPai.appendChild(task);
}
addTask("Ir Trabalhar");


// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addColor(string) {
  let taskPai2 = document.getElementsByClassName("my-tasks")[0];
  let div = document.createElement("div");
  div.className = "task";
  div.style.backgroundColor = string
  taskPai2.appendChild(div);
};
addColor("blue")

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

let myColor = document.querySelector(".task");
myColor.addEventListener("click", addTaskClass)
let selecionado = false;

function addTaskClass(event) {
  if (selecionado === false) {
    event.target.className = "task-selected"
    selecionado = true;
  } else {
    event.target.className = "task";
    selecionado = false;
  }
}



// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
let paint = document.getElementById("days");
paint.addEventListener("click", addEvent);
let whatColor = false;
function addEvent(event) {
  if (whatColor === false) {
    event.target.style.color = myColor.style.backgroundColor;
    whatColor = true;
  } else {
    event.target.style.color = "rgb(119,119,119)";
    whatColor = false;
  };
};


// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode .

let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',];
let select = document.getElementById('estado');
let div = document.createElement('div');
let body = document.querySelector('body')
body.appendChild(div)
let botaoSend = document.getElementById('send');

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, estados);
});

for (let elementos of estados) {
  let creatOption = document.createElement('option');
  creatOption.innerText = elementos;
  select.appendChild(creatOption);
}

function prevent(event) {
  event.preventDefault()
  let input = document.querySelectorAll('.oi');
  for (let element of input) {
    if (element.checked === true || element.getAttribute('cols') === '30') {
      let createP = document.createElement('p');
      createP.innerText = element.getAttribute('name') + element.value;
      div.appendChild(createP);
    } else if (element.checked === false && element.getAttribute('type') !== 'radio') {
      let createP = document.createElement('p');
      createP.innerText = element.getAttribute('name') + element.value;
      div.appendChild(createP);
    }
  }
}

botaoSend.addEventListener('click', prevent);





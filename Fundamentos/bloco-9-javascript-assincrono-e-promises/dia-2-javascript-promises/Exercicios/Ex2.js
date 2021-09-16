const promise = () => {
  const mypromise = new Promise((resolve, reject) => {
    let array = [];
    for (let i = 0; i < 10; i += 1) {
      let num = Math.floor(Math.random() * 50) + 1;
      let num2 = num * num;
      array.push(num2);
    }
    const soma = array.reduce((acc, elem) => acc + elem, 0);
    (soma < 8000) ? resolve(soma) : reject()
  })
  mypromise
    // .then(() => console.log('Promise resolvida'))
    .then(soma => [2, 3, 5, 10].map(number => soma / number))
    .then(array => array.reduce((acc, elem) => acc + elem, 0))
    .then(mensagem => console.log(mensagem))
    .catch(() => console.log('Promise rejeitada'));
}
promise()

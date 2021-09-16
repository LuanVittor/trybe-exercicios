const random = () => {
  let array = [];
  for (let i = 0; i < 10; i += 1) {
    let num = Math.floor(Math.random() * 51);
    let num2 = num * num;
    array.push(num2);
  }
  const soma = array.reduce((number, acc) => number + acc, 0);

  if (soma < 8000) {
    return soma
  }
  throw new Error();
}
const divESoma = (soma) => console.log([2, 3, 5, 10].map(number => soma / number)
  .reduce((number, acc) => number + acc));

const promise = async() => {
  try {
    const soma = await random();
    const somaDaDiv = await divESoma(soma);
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

promise();
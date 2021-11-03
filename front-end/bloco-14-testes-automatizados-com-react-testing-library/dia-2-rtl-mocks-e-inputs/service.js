function randomNum() {
  const num = Math.floor(Math.random() * 101)
  return num;
}

const upperCase = (param) => param.toUpperCase();

const firstLetter = (param) => param.charAt(0);

const concat = (param1, param2) => param1.concat(param2);

function fetch() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response =>
      response
        .json()
        .then(json =>
          response.ok ? Promise.resolve(json) : Promise.reject(json)
        )
    );
}

module.exports = { randomNum, upperCase, firstLetter, concat, fetch }
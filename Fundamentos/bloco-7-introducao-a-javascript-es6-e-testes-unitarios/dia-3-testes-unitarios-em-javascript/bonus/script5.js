// Bônus 5
// Kata ou Code Kata são exercícios de programação que ajudam a aprimorar as habilidades através da prática e da repetição.
// Kata 'Verificador de senhas': Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário. Não é necessário fazer os itens extras (2, 3 e 4) do repositório.

// password should be larger than 8 chars
// password should have one number at least

const assert = require('assert');

const Verify = (password) => {
  if (password.length <= 8) {
    return false;
  }
  if (password.match(/\d/)) {
    return true;
  } else {
    return false;
  }
}

assert.deepStrictEqual(Verify('123'), false);
assert.deepStrictEqual(Verify('123456789'), true);



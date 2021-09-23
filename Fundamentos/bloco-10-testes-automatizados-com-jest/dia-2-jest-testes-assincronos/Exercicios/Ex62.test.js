// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const getAge = (age) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const r = Animals.filter((element) => element.age === age);
      if (r.length > 0) {
        return resolve(r)
      }
      return reject(new Error('Nenhum animal encontrado!'));
    }, 100);
  })
};

  describe('Quando tem animal com o a idade pedida', () => {
    test('retorne o obj do animal', () => {
      const obj = [{ name: 'Dorminhoco', age: 1, type: 'Dog' },];
      return expect(getAge(1)).resolves.toEqual(obj);
    });
  });

  describe('Quando não tem o animal com a idade', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getAge(9)).rejects.toEqual(new Error('Nenhum animal encontrado!'));
    });
  });
// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('testando com async', () => {
  it('quando o id existir', async () => {
    const data = await getUserName(2);
    expect(data).toEqual('Paul');
  })

  it('quando o id nao existir', async() => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error){
      expect(error.message).toEqual('User with 3 not found.')
    }
  })
})
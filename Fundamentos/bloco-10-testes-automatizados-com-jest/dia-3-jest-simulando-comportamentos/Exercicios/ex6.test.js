const ex6 = require("./ex6");

describe('Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.', () => {
  ex6.fetchDog = jest.fn();
  afterEach(ex6.fetchDog.mockReset)

  test('caso se resolva', async () => {
    ex6.fetchDog.mockResolvedValue("request sucess");

    ex6.fetchDog();
    await expect(ex6.fetchDog()).resolves.toBe("request sucess");
  })

  test('caso de reject', async () => {
    ex6.fetchDog.mockRejectedValue('request failed')

    await expect(ex6.fetchDog()).rejects.toMatch("request failed");
  })
})
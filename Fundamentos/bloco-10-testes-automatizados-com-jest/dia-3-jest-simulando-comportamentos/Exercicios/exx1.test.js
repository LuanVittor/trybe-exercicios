// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const exx1 = require("./exx1")
jest.mock("./exx1")

test('Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  exx1.random = jest.fn().mockReturnValue(10)

  expect(exx1.random()).toBe(10)
  expect(exx1.random).toHaveBeenCalled()
  expect(exx1.random).toHaveBeenCalledTimes(1)
})

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.', () => {
  const mockDiv = jest.fn()
  .mockImplementation((a, b) => a / b)
  // mockDiv.mockReturnValue(20)

  expect(mockDiv(40, 2)).toBe(20);
  expect(mockDiv).toHaveBeenCalled()
  expect(mockDiv).toHaveBeenCalledTimes(1)
})
// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
  const mockDiv = jest.fn()
  .mockImplementation((a, b, c) => a * b * c)

  expect(mockDiv(2, 2, 2)).toBe(8);
  expect(mockDiv).toHaveBeenCalled()
  expect(mockDiv).toHaveBeenCalledTimes(1)

  mockDiv.mockReset()
  mockDiv.mockImplementation((a) => a * 2)

  expect(mockDiv(2)).toBe(4);
  expect(mockDiv).toHaveBeenCalled()
  expect(mockDiv).toHaveBeenCalledTimes(1)
})

test('Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {
  exx1.uppercase.mockImplementation(a => a.toLowerCase());
  expect(exx1.uppercase('LUAN')).toBe('luan');
  
  exx1.firstLetter.mockImplementation(string => string[string.length - 1])
  expect(exx1.firstLetter('luan')).toBe('n')

  exx1.concatfun.mockImplementation((str1, str2, str3) => str1.concat(str2, str3))
  expect(exx1.concatfun('o', 'i', 'e')).toBe('oie')
})

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
test('Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.', () => {
  exx1.uppercase.mockImplementation(a => a.toLowerCase());
    expect(exx1.uppercase('LUAN')).toBe('luan');
    
    exx1.uppercase.mockRestore();
    
    expect(exx1.uppercase('luan')).toBe('LUAN')
})

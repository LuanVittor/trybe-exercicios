const { expect } = require('@jest/globals')
const { describe } = require('yargs')
const service = require('./service')

test('Se gera um numero aleatorio', () => {
  service.randomNum = jest.fn().mockReturnValue(10)
  service.randomNum()

  expect(service.randomNum).toHaveBeenCalled()
  expect(service.randomNum).toHaveBeenCalledTimes(1);
  expect(service.randomNum()).toBe(10);
})

test('se divide o primeiro pelo segundo', () => {
  service.randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);
  
  expect(service.randomNum(25, 5)).toBe(5)
  expect(service.randomNum).toHaveBeenCalledWith(25, 5)
  expect(service.randomNum).toHaveBeenCalled()
  expect(service.randomNum).toHaveBeenCalledTimes(1);
})

test('se multiplica os parametros', () => {
  service.randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
  expect(service.randomNum(5, 5, 5)).toBe(125)
  expect(service.randomNum).toHaveBeenCalledWith(5, 5, 5)
  expect(service.randomNum).toHaveBeenCalled()
  expect(service.randomNum).toHaveBeenCalledTimes(1);

})

test('se dobra o parametro', () => {
  service.randomNum.mockReset();
  service.randomNum = jest.fn().mockImplementation((a) => a * 2);
  
  expect(service.randomNum(5)).toBe(10)
  expect(service.randomNum).toHaveBeenCalledWith(5)
  expect(service.randomNum).toHaveBeenCalled()
  expect(service.randomNum).toHaveBeenCalledTimes(1);

})

test('se retorna em letra minuscula', () => {
  service.upperCase = jest.fn().mockImplementation((a) => a.toLowerCase());
  
  expect(service.upperCase("luan")).toBe("luan")
  expect(service.upperCase).toHaveBeenCalledWith("luan")
  expect(service.upperCase).toHaveBeenCalled()
  expect(service.upperCase).toHaveBeenCalledTimes(1);

  service.upperCase.mockRestore()
  service.upperCase = jest.fn().mockImplementation((a) => a.toUpperCase());
  
  expect(service.upperCase("luan")).toBe("LUAN")

})

test('se retorna a ultima letra ', () => {
  service.firstLetter = jest.fn().mockImplementation((a) => a.charAt(a.length -1));
  
  expect(service.firstLetter("luan")).toBe("n")
  expect(service.firstLetter).toHaveBeenCalledWith("luan")
  expect(service.firstLetter).toHaveBeenCalled()
  expect(service.firstLetter).toHaveBeenCalledTimes(1);

})

test('se concatena as strings ', () => {
  service.concat = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));
  
  expect(service.concat("luan", " lindo", " cheiroso")).toBe("luan lindo cheiroso")
  expect(service.concat).toHaveBeenCalledWith("luan", " lindo", " cheiroso")
  expect(service.concat).toHaveBeenCalled()
  expect(service.concat).toHaveBeenCalledTimes(1);

})

describe("fetch dog", () => {
  service.fetch = jest.fn();
  afterEach(service.fetch.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    service.fetch.mockResolvedValue("request sucess");

    service.fetch();
    expect(service.fetch).toHaveBeenCalled();
    expect(service.fetch).toHaveBeenCalledTimes(1);
    await expect(service.fetch()).resolves.toBe("request sucess");
    expect(service.fetch).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    service.fetch.mockRejectedValue("request failed");

    expect(service.fetch).toHaveBeenCalledTimes(0);
    await expect(service.fetch()).rejects.toMatch("request failed");
    expect(service.fetch).toHaveBeenCalledTimes(1);
  });
});

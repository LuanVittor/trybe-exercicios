const math = require('./math');
jest.mock('./math');

test('subtrair', () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(5, 2);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(5, 2);
  expect(math.subtrair(5, 2)).toBe(3);
})

test('multiplicar', () => {
  math.multiplicar.mockImplementation((a, b) => a * b);
  math.multiplicar(2, 2);

  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar).toBeCalledTimes(1);
  expect(math.multiplicar).toBeCalledWith(2, 2);
  expect(math.multiplicar(2, 2)).toBe(4);
})

test('soma', () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(5, 5);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toBeCalledTimes(1);
  expect(math.somar).toBeCalledWith(5, 5);
  expect(math.somar(5, 5)).toBe(10);
})

test('divide', () => {
  const mockDivisao = jest
    .spyOn(math, "dividir")
    .mockImplementation((a, b) => a / b);

  expect(mockDivisao(30, 2)).toBe(15);
  expect(mockDivisao).toHaveBeenCalled();
  expect(mockDivisao).toBeCalledTimes(1);
  expect(mockDivisao).toBeCalledWith(30, 2);

  expect(mockDivisao(4, 2)).toBe(2);
  expect(mockDivisao).toHaveBeenCalled();
  expect(mockDivisao).toBeCalledTimes(2);
  expect(mockDivisao).toBeCalledWith(4, 2);

  expect(mockDivisao(15, 3)).toBe(5);
  expect(mockDivisao).toHaveBeenCalled();
  expect(mockDivisao).toBeCalledTimes(3);
  expect(mockDivisao).toBeCalledWith(15, 3);
})

test('Mock da função subtrair de modo que possa restaurar sua implementação original', () => {
  const mockSubtrair = jest
  .spyOn(math, "subtrair");
  mockSubtrair.mockRestore()
  mockSubtrair.mockImplementation((a, b) => a + b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 10)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 10);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(0);

  expect(mockSubtrair(10, 10)).toBe(0);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 10);
});
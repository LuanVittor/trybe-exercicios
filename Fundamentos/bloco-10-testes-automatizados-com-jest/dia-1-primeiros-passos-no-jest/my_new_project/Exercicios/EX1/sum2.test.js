const { it, expect } = require('@jest/globals');
const sum = require('./sum2');

  it('verifica se esta somando corretamente 4 e 5', () => {
    expect(sum(4, 5)).toBe(9)
  });

  it('se 0 e 0 = 0', () => {
    expect(sum(0, 0)).toBe(0)
  });

  it('se soma apenas numeros', () => {
    expect(() => {sum(4, '5')}).toThrow()
  });

  it('se a frase de erro eh a devida', () => {
    expect(() => {sum(4, '5')}).toThrow(new Error('parameters must be numbers'))
  })

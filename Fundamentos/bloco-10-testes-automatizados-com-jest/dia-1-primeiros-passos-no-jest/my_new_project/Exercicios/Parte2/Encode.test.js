const { encode, decode } = require("./Encode")

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('luan')).toEqual('l51n')
  })
  it('se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u', () => {
    expect(decode('l51n')).toEqual('luan')
  })
  it('se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('qwsd')).toEqual('qwsd')
  })
  it('se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('luan').length).toEqual(4)
  })
})
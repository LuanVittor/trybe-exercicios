const { it, expect } = require("@jest/globals");
const myRemove = require("./MyRemove");

it('se remove o 3', () => {
  const arr =[1, 2, 3, 4]
  expect(() => {myRemove(arr, 3)}).not.toContain(3)
})

it('se nao retorna o array', () => {
  const arr =[1, 2, 3, 4]
  expect(() => {myRemove(arr, 3)}).not.toContain(arr)
})

it('se nao sofreu alteracoes', () => {
  const arr =[1, 2, 3, 4]
  expect(() => {myRemove(arr, 5)}).not.toContain([5])
})
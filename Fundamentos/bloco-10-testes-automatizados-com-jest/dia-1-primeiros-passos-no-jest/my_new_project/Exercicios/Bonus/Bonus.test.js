const searchEmployee = require("./Bonus");

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

describe('testes da funcao', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('testa se retorna ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana')
  })
  it('testa se retorna bezos', () => {
    expect(searchEmployee('1256-4', 'lastName')).toEqual('Bezos')
  })
  it('testa se retorna um erro', () => {
    expect (() => {searchEmployee('5550-5', 'lastName')}).toThrow(new Error("ID não identificada"))
  })
  it('testa se retorna um erro', () => {
    expect (() => {searchEmployee('1256-4', 'sex')}).toThrow(new Error("Informação indisponível"))
  })
  it('testa se retorna especialidades', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL'])
  })
})
// Person.ts

export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
      this.name = name;
      this.birthDate = birthDate;
  }

  get name(): string {
      return this._name;
  }

  set name(value: string) {
      this.validateName(value);
      this._name = value;
  }

  get birthDate(): Date {
      return this._birthDate;
  }

  set birthDate(value: Date) {
      this.validateBirthDate(value)
      this._birthDate = value;
  }

  static getAge(value: Date): number {
      const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
      const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
      return Math.floor(diff / yearMs);
  }

  private validateName(value: string): void {
      if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(value: Date): void {
      if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
      if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}

// Para testar!
// ./index.ts

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);


// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instânicas de classes abstratas
const pessoa = new Person('Carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
console.log(carolina);

const math = new Subject('Matemática');
// isso também não deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);
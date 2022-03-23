interface Dog {
  name: string
  age: number
  owner: string
}

class Dog {
  // devido a interceface criada nao eh mais necessario deixar aqui
  // name: string
  // age: number
  // owner: string

  constructor(name: string, age: number, owner: string) {
    this.name = name
    this.age = age
    this.owner = owner
  }

  speak(): void {
  console.log(`meu nome eh ${this.name}, tenho ${this.age} anos e meu o nome do meu dono eh ${this.owner}`);
  }
}

const dog1 = new Dog('nick', 5, 'Luan');

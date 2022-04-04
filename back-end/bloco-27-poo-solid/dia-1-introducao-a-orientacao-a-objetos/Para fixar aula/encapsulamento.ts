class Person2 {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p11 = new Person2('Maria', 171, 58, 19);
const p22 = new Person2('João', 175, 66, 18);

// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);

/*
Saída:
Mariah





*/
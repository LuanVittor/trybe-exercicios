export enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
}


export interface Car {
  brand: string,
  color: Colors;
  doors: number
}

export class Car {
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Buzina');
  }

  openTheDoor(door: number): void {
    console.log(`abrindo porta ${door}`);
  }

  speedUp(): void {
    console.log("Acelerando carro.");
  }

  speedDown(): void {
    console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
    console.log("Parando carro.");
}
}

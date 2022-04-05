interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class Myclass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam): string {
    return `a soma eh: ${ this.myNumber + myParam}`
  }
}

const obj1 = new Myclass(10);

console.log(obj1.myFunc(5));

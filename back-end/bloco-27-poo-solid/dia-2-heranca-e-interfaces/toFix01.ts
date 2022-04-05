class SuperClass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() {
    console.log('Ola Mundo!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super();
    this.isSuper = false;
  }
  public sayHello2(): void {
    this.sayHello()
  }
}

const func = (obj: SubClass) => {
  obj.sayHello2()
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

const sub = new SubClass();

func(sub);
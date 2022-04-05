class SuperClass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Ola Mundo!');
  }
}

class SubClass extends SuperClass {

}

const func = (obj: SuperClass) => {
  obj.sayHello()
}

const sup = new SuperClass();
const sub = new SubClass();

func(sup);
func(sub);
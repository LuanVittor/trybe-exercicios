interface Logger {
  log(param: string): void;
}


class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(param);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log('log2: ' + param);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string):void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`)
  }
}

const log1= new ConsoleLogger()
const log2= new ConsoleLogger2()

const database1 = new ExampleDatabase(log1);
const database2 = new ExampleDatabase(log2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1')
database2.save('chave 2', 'valor 2')
database3.save('chave 3', 'valor 3');


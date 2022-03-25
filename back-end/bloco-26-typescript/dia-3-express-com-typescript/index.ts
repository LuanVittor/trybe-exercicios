import express, { Express, Request, Response } from 'express';

const app: Express = express();
type Person = {
  name: string,
  age: number,
  city: string
}

const fakeDB: Person[] = [{name: 'luan', age: 18, city: 'sjc'}];

app.get('/all', (req: Request, res: Response): void => {
  const getAll: Person[] = fakeDB
  console.log(getAll);
})
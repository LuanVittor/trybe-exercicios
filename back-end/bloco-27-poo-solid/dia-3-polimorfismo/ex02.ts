export default interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

import Person from './ex01';

class Employee extends Person implements Enrollable {
  private _enrollment: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this.salary = salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');

    this._enrollment = value;
  }

  get salary(): number {    const { username, classe, level, password } = payload;
  const values = [username, classe, level, password];
  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password)
  VALUES (?, ?, ?, ?)`; 
  await this.connection.execute<ResultSetHeader>(query, values);
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }

    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
  }

}

class Teacher extends Employee {

  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }


}

export default class Student extends Person implements Enrollable {
    private _enrollment: string = String();
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this.enrollment = this.generateEnrollment();
    }

    get enrollment(): string {
        return this._enrollment;
    }

    set enrollment(value: string) {
        if (value.length < 16) {
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        }

        this._enrollment = value;
    }

    get examsGrades(): number[] {
        return this._examsGrades;
    }

    set examsGrades(value: number[]) {
        if (value.length > 4) {
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        }

        this._examsGrades = value;
    }

    get worksGrades(): number[] {
        return this._worksGrades;
    }

    set worksGrades(value: number[]) {
        if (value.length > 2) {
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        }

        this._worksGrades = value;
    }

    sumGrades(): number {
        return [...this.examsGrades, ...this.worksGrades]
            .reduce((previousNote, note) => note + previousNote, 0);
    }

    sumAverageGrade(): number {
        const sumGrades = this.sumGrades();
        const divider = this.examsGrades.length + this.worksGrades.length;

        return Math.round(sumGrades / divider);
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `STU${randomStr}`;
    }

}
// ./Teacher.ts

import Subject from './ex04';
import Employee from './ex03';
import Person from './ex1';

export default class Teacher extends Person implements Employee {

    private _subject: Subject;
    private _registration: string = String();
    private _salary: number = Number();
    private _admissionDate: Date;

    constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
        super(name, birthDate);

        this._subject = subject;
        this.salary = salary;
        this._admissionDate = new Date();
        this.registration = this.generateRegistration();
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(value: Subject) {
        this._subject = value;
    }

    get registration(): string {
        return this._registration
    }

    set registration(value: string) {
        if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

        this._registration = value
    }

    get salary(): number {
        return this._salary
    }

    set salary(value: number) {
        if (value < 0) throw new Error('O salário não pode ser negativo.');

        this._salary = value
    }

    get admissionDate(): Date {
        return this._admissionDate;
    }

    set admissionDate(value: Date) {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

        this._admissionDate = value
    }

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

        return `PRF${randomStr}`;
    }

}

// Para testar!
// ./index.ts

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro:
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro:
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
class Estudante {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    return [...this.worksGrades, ...this.examsGrades].reduce((prev, note) => {
      note += prev;
      return note;
    }, 0)
  }

  avarageGrades(): number {
    const sum = this.sumGrades()
    const quantity = this.examsGrades.length + this.worksGrades.length;
    return Math.round(sum/quantity)
  }
}
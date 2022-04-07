// refatoracao dos dois codigos abaixo desse

type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school?: string;
};

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

/* Coletar notas */
const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade) });

/* "Converter" */
const percentageGradesIntoLetters = (student: Student): Student => ({
  ...student,
  disciplines: student.disciplines.map(getLetterGrades) });

/* "Determinar" */
const approvedStudents = ({ disciplines }: Student): boolean =>
  disciplines.every(({ grade }) => grade > 0.7);

/* "Atualizar" */
const updateApprovalData = (student: Student): void => {
  console.log(`A pessoa com nome ${student.name} foi aprovada!`);

  student.disciplines.forEach(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
  getLetterGrades,
};

// PIOR EXENPLO DE USO
// type Discipline = {
//   name: string;
//   grade: number;
//   letterGrade?: string;
// };

// type Student = {
//   name: string;
//   disciplines: Discipline[];
// };

// function setApproved(students: Array<Student>) {
//   const studentsWithLetterGrade = students.map((student) => {
//     const disciplinesWithLetterGrade = student.disciplines.map((discipline) => {
//       if (discipline.grade >= 0.9) discipline.letterGrade = 'A';
//       else if (discipline.grade >= 0.8) discipline.letterGrade = 'B';
//       else if (discipline.grade >= 0.7) discipline.letterGrade = 'C';
//       else if (discipline.grade >= 0.6) discipline.letterGrade = 'D';
//       else if (discipline.grade >= 0.1) discipline.letterGrade = 'E';
//       else discipline.letterGrade = 'F';

//       return discipline;
//     });

//     return {
//       name: student.name,
//       disciplines: disciplinesWithLetterGrade,
//     };
//   });

//   const approvedStudents = studentsWithLetterGrade.filter(({ disciplines }) =>
//     disciplines.every((discipline) => discipline.grade > 0.7));

//   /* Finja que o console.log é algo que atualiza uma base de dados */
//   approvedStudents.map(({ name, disciplines }) => {
//     console.log(`A pessoa com nome ${name} foi aprovada!`);
//     disciplines.map(({ name, letterGrade }) =>
//       console.log(`${name}: ${letterGrade}`));
//   });
// }

// /* Abaixo temos um exemplo de execução */
// const students = [
//   {
//     name: 'Lee',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.6 },
//     ],
//   },
//   {
//     name: 'Clementine',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
// ];

// setApproved(students);

// /*
// Saída:
// A pessoa com nome Clementine foi aprovada!
// matemática: B
// história: A
// */

// refatoracao do codigo acima

// PIOR EXENPLO

// type Discipline = {
//   name: string;
//   grade: number;
//   letterGrade?: string;
// };

// type Student = {
//   name: string;
//   disciplines: Discipline[];
// };

// /* "Converter" */
// const percentageGradesIntoLetters = ({ name, disciplines }: Student) => ({
//   name,
//   disciplines: disciplines.map(({ name, grade }) => {
//     let letterGrade;

//     if (grade >= 0.9) letterGrade = 'A';
//     else if (grade >= 0.8) letterGrade = 'B';
//     else if (grade >= 0.7) letterGrade = 'C';
//     else if (grade >= 0.6) letterGrade = 'D';
//     else if (grade >= 0.1) letterGrade = 'E';
//     else letterGrade = 'F';

//     return { name, grade, letterGrade };
//   })});

// /* "Determinar" */
// const approvedStudents = ({ disciplines }: Student): boolean =>
//   disciplines.every(
//     ({ grade }) => grade > 0.7
//   );

// /* "Atualizar" */
// const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
//   console.log(`A pessoa com nome ${studentName} foi aprovada!`);

//   disciplines.map(({ name, letterGrade }) =>
//     console.log(`${name}: ${letterGrade}`));
// };

// function setApproved(students: Student[]): void {
//   students
//     .map(percentageGradesIntoLetters)
//     .filter(approvedStudents)
//     .map(updateApprovalData);
// }

// /*
//   Não se esqueça que é necessário exportar ao final as funções para que você
//   possa testa-las
// */
// export {
//   percentageGradesIntoLetters,
//   approvedStudents,
//   updateApprovalData,
//   setApproved,
// };
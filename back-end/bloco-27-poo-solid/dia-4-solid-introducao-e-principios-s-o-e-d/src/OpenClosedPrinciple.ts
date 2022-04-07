// // ./src/index.ts

// ///...

// const approvedStudents = ({ disciplines, school }: Student): boolean =>
//   disciplines.every(({ grade }) => (
//     school === 'Standard' ? grade >= 0.7 : grade >= 0.8
//   ));

// /* Abaixo temos o exemplo de execução com algumas adições */
// const students = [
//   {
//     name: 'Lee',
//     school: 'Standard',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
//   {
//     name: 'Albus',
//     school: 'Hogwarts',
//     disciplines: [
//       { name: 'divination', grade: 0.8 },
//       { name: 'potions', grade: 0.9 },
//     ],
//   },
// ];

// // setApproved(students);

// codigo acima refatorado no principio aberto e fechado

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School; // Agora não é mais uma string
};

const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => grade >= school.approvalGrade);

// Para testar:
const students = [
  {
    name: 'Lee',
    school: { name: 'Standard', approvalGrade: 0.7 },
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: { name: 'Hogwarts', approvalGrade: 0.8 },
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(students);
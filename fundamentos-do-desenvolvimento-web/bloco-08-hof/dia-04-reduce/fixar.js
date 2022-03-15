const numbers = [50, 85, -30, 3, 15];
let higherNumber = numbers[0];

for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > higherNumber) higherNumber = numbers[i]
}

console.log(higherNumber);

//-------------------------------------------

const higherNumber2 = numbers.reduce((result, number) => result > number ? result : number);

console.log(higherNumber2);

//------------------------------------------

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenSum = numbers2.reduce((result, number) => number % 2 === 0 ? result + number : result);

console.log(evenSum);

//-----------------------------------------

const estudantes = [
{
  nome: 'Jorge',
  sobrenome: 'Silva',
  idade: 14,
  turno: 'Manhã',
  materias: [
    { name: 'Matemática', nota: 67 },
    { name: 'Português', nota: 79 },
    { name: 'Química', nota: 70 },
    { name: 'Biologia', nota: 65 },
  ],
},
{
  nome: 'Mario',
  sobrenome: 'Ferreira',
  idade: 15,
  turno: 'Tarde',
  materias: [
    { name: 'Matemática', nota: 59 },
    { name: 'Português', nota: 80 },
    { name: 'Química', nota: 78 },
    { name: 'Biologia', nota: 92 },
  ],
},
{
  nome: 'Jorge',
  sobrenome: 'Santos',
  idade: 15,
  turno: 'Manhã',
  materias: [
    { name: 'Matemática', nota: 76 },
    { name: 'Português', nota: 90 },
    { name: 'Química', nota: 70 },
    { name: 'Biologia', nota: 80 },
  ],
},
{
  nome: 'Maria',
  sobrenome: 'Silveira',
  idade: 14,
  turno: 'Manhã',
  materias: [
    { name: 'Matemática', nota: 91 },
    { name: 'Português', nota: 85 },
    { name: 'Química', nota: 92 },
    { name: 'Biologia', nota: 90 },
  ],
},
{
  nome: 'Natalia',
  sobrenome: 'Castro',
  idade: 14,
  turno: 'Manhã',
  materias: [
    { name: 'Matemática', nota: 70 },
    { name: 'Português', nota: 70 },
    { name: 'Química', nota: 60 },
    { name: 'Biologia', nota: 50 },
  ],
},
{
  nome: 'Wilson',
  sobrenome: 'Martins',
  idade: 14,
  turno: 'Manhã',
  materias: [
    { name: 'Matemática', nota: 80 },
    { name: 'Português', nota: 82 },
    { name: 'Química', nota: 79 },
    { name: 'Biologia', nota: 75 },
  ],
},
];

const melhorNota = estudantes.map((student) => ({
  nome: student.nome,
  materia: student.materias.reduce((acc, curr) => acc.nota > curr.nota ? acc : curr).name
}))

console.log(melhorNota);
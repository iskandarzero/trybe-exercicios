const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionaTurno = (objeto, chave, valor) => objeto[chave] = valor;  
adicionaTurno(lesson2, 'turno', 'noite')
console.log(Object.keys(lesson2));
console.log(Object.values(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

function retornaAlunos(objeto) {
  const sala1 = objeto.lesson1.numeroEstudantes;
  const sala2 = objeto.lesson2.numeroEstudantes;
  const sala3 = objeto.lesson3.numeroEstudantes;
  const todasSalas = `Juntando as salas, temos ${sala1 + sala2 + sala3} alunos`;

  return todasSalas;
}

console.log(retornaAlunos(allLessons));

const acessaValorPeloIndex = (objeto, index) => Object.values(objeto)[index]

console.log(acessaValorPeloIndex(allLessons, 2));

const verificaPar = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  let compara = false;
   for (let i in array) {
     if(array[i][0] === chave && array[i][1] === valor) {
       compara = true;
     }
  }

  return compara;
}

console.log(verificaPar(lesson1, 'turno', 'manhã'));
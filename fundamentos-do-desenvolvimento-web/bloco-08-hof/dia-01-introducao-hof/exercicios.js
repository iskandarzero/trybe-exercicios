// Atividade 1
const newEmployees = () => {
  const employees = {
    id1: employeesInfos('Pedro Guerra'),
    id2: employeesInfos('Luiza Drumond'),
    id3: employeesInfos('Carla Paiva')
  }
  return employees;
};

const employeesInfos = (funcionario) => ({nome: funcionario, email: `${funcionario.toLowerCase().split(' ').join('-')}@trybe.com`})

console.log(newEmployees());

// Atividade 2

const checaResultado = (aposta, resultado) => aposta === resultado;

const sorteio = (aposta, chamado) => {
  const resultado = Math.floor((Math.random() * 5) + 1);

  return chamado(aposta, resultado) ? 'Você venceu!' : 'Boa sorte na próxima!';
}

console.log(sorteio(3, checaResultado));

// Atividade 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaNota = (respostaCorreta, respostaAlunos) => {
  if (respostaCorreta === respostaAlunos) {
    return 1;
  } else if (respostaAlunos === 'N.A') {
    return 0;
  }
  return -0.5;
}

const lancaNota = (respostaAlunos, respostaCorreta, callback) => {
  let contador = 0;
  for (let i = 0; i < respostaCorreta.length; i += 1) {
    const numeros = callback(respostaCorreta[i], respostaAlunos[i]);
    contador += numeros
  }
  return contador;
}

console.log(lancaNota(STUDENT_ANSWERS, RIGHT_ANSWERS, comparaNota));

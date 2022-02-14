function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCICIO 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let listaDias = document.querySelector('#days');

function criaDias() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let diasDaLista = document.createElement('li');
    diasDaLista.innerHTML = dezDaysList[i];
    listaDias.appendChild(diasDaLista);
    diasDaLista.classList.add('day');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      diasDaLista.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      diasDaLista.classList.add('friday');
    }
  }
}

criaDias()

// EXERCICIO 2

function criaBotao(string) {
  let botao = document.createElement('button');
  let container = document.querySelector('.buttons-container');
  botao.innerHTML = string;
  botao.setAttribute('id', 'btn-holiday');
  container.appendChild(botao);
}

criaBotao('Feriados')

// EXERCICIO 3

let botao = document.querySelector('#btn-holiday');
let feriado = document.querySelectorAll('.holiday');
botao.addEventListener('click', mudaCor);

function mudaCor() {
  for (let i = 0; i < feriado.length; i += 1) {
    if (feriado[i].style.background === 'aquamarine') {
      feriado[i].style.background = 'unset';
    }
    else {
      feriado[i].style.background = 'aquamarine'
    }
  }
}

// EXERCICIO 4

function criaBotaoSexta(string) {
  let botao = document.createElement('button');
  let container = document.querySelector('.buttons-container');
  botao.innerHTML = string;
  botao.setAttribute('id', 'btn-friday');
  container.appendChild(botao);
}

criaBotaoSexta('Sexta-feira')

// EXERCICIO 5

let botaoSexta = document.querySelector('#btn-friday');
let sexta = document.querySelectorAll('.friday');
botaoSexta.addEventListener('click', mudaTexto);

function mudaTexto() {
  let arraySexta = [4, 11, 18, 25];
  for (let i = 0; i < sexta.length; i += 1) {
    if (sexta[i].innerText === 'SEXTOU') {
      sexta[i].innerText = arraySexta[i];
    }
    else {
      sexta[i].innerText = 'SEXTOU';
    }
  }
}

// EXERCICIO 6

function diaZoom(){
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}
function diaMenosZoom(){
  let dia = document.querySelector('#days');

  dia.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}

diaMenosZoom()
diaZoom()

// EXERCICIO 7

let tarefas = document.querySelector('.my-tasks');

function adicionaTarefa(string) {
  let novaTarefa = document.createElement('span');
  novaTarefa.innerHTML = string;
  tarefas.appendChild(novaTarefa);
}

adicionaTarefa('Cozinhar')

// EXERCICIO 8

function adicionaLegenda(cor) {
  let legenda = document.createElement('div');
  legenda.classList.add('task');
  legenda.style.background = cor;
  tarefas.appendChild(legenda);
}

adicionaLegenda('green')

// EXERCICIO 9

let taskSelection = document.querySelector('.task')

taskSelection.addEventListener('click', function(event){
  if (event.target.className === 'task selected') {
    event.target.classList.remove('selected');
  }
  else {
    event.target.classList.add('selected');
  }
})

// EXERCICIO 10

let dias = document.querySelector('#days');

dias.addEventListener('click', function(event){
  if (taskSelection.className === 'task selected') {
    event.target.style.background = 'green';
    taskSelection.classList.remove('selected');
  }
  else if (event.target.style.background === 'green') {
    event.target.style.background = 'unset';
  }
})
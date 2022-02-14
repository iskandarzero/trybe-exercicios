const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

  // let liTech = document.querySelector('.container').children;
  // liTech[0].addEventListener('click', addClass0);
  // liTech[1].addEventListener('click', addClass1);
  // liTech[2].addEventListener('click', addClass2);

  // function addClass0() {
  //   liTech[0].className = 'tech';
  //   liTech[1].classList.remove('tech');
  //   liTech[2].classList.remove('tech');
  // }
  // function addClass1() {
  //   liTech[1].className = 'tech';
  //   liTech[0].classList.remove('tech');
  //   liTech[2].classList.remove('tech');
  // }
  // function addClass2() {
  //   liTech[2].className = 'tech';
  //   liTech[1].classList.remove('tech');
  //   liTech[0].classList.remove('tech');
  // }

function addClass(event) {
  let retiraClasse = document.querySelector('.tech');
  retiraClasse.classList.remove('tech');
  event.target.classList.add('tech');
}

firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function(evento) {
  let tech = document.querySelector('.tech');
  tech.innerText = evento.target.value;
});
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
let duplo = document.querySelector('#my-spotrybefy');
function redirecionaSite() {
  location.href = 'https://www.youtube.com/watch?v=4r9riSyv1d0';
}

duplo.addEventListener('dblclick', redirecionaSite)
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
duplo.addEventListener('mouseover', function(event) {
  event.target.style.color = 'red';
});

duplo.addEventListener('mouseout', function(event) {
  event.target.style.color = 'unset';
});
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

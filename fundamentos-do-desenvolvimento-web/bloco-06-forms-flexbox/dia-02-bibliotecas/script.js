const botao = document.querySelector('#button');
const botaoApagar = document.createElement('button');
botaoApagar.innerText = 'Apagar';
botaoApagar.className = 'botoes';
document.querySelector('#botoes').appendChild(botaoApagar);
document.getElementById('myInputId').DatePickerX.init();

function clearForms() {
  document.querySelector('#formulario').reset();
}

botaoApagar.addEventListener('click', clearForms);
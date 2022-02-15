window.onload = function() {
  let corpo = document.body;
  let inputFundo = document.querySelector('#corFundo');
  let texto = document.querySelector('#texto');
  let inputTexto = document.querySelector('#corTexto');
  let inputTamanho = document.querySelector('#tamanhoFonte');
  let inputEspacamento = document.querySelector('#espacamentoLinha');
  let inputFonte = document.querySelector('#fonte');
  let cabecalho = document.querySelector('#cabecalho');
  let botao = document.createElement('button');
  let rodape = document.querySelector('#rodape');
  let titulo = document.querySelector('#titulo');
  let selecaoFilho = document.querySelectorAll('.seletor');
  let selecoes = document.querySelector('#selecoes');
  botao.innerHTML = 'Modo noturno'
  cabecalho.appendChild(botao);
  
  botao.addEventListener('click', function(){
    if (cabecalho.style.background === 'black') {
      corpo.style.background = 'white';
      cabecalho.style.background = 'greenyellow';
      rodape.style.background = 'greenyellow';
      titulo.style.color = 'unset';
      texto.style.color = 'unset';
      rodape.style.color = 'unset';
      selecoes.style.background = 'greenyellow';
      for (let i = 0; i < selecaoFilho.length; i += 1){
        selecaoFilho[i].style.color = 'unset';
      }
    }
    else {
      corpo.style.background = '#525252';
      cabecalho.style.background = 'black';
      rodape.style.background = 'black';
      titulo.style.color = 'white';
      texto.style.color = 'white';
      rodape.style.color = 'white';
      selecoes.style.background = 'black';
      for (let i = 0; i < selecaoFilho.length; i += 1){
        selecaoFilho[i].style.color = 'white';
      }
    }
  });

  
  inputFundo.addEventListener('change', function(){
    corpo.style.background = inputFundo.value;
  });

  inputTexto.addEventListener('change', function(){
    texto.style.color = inputTexto.value; 
  });

  inputTamanho.addEventListener('change', function(){
    texto.style.fontSize = inputTamanho.value;
  });

  inputEspacamento.addEventListener('change', function(){
    texto.style.lineHeight = inputEspacamento.value;
  });

  inputFonte.addEventListener('change', function(){
    texto.style.fontFamily = inputFonte.value;
  });
}
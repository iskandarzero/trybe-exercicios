const readline = require('readline-sync');

const scripts = [
  {name: 'Calcule o imc', path: './imc.js'},
  {name: 'Realiza um sorteio', path: './sorteio.js'},
  {name: 'Calcula a velocidade', path: './velocidade.js'},
  {name: 'Calcula o fatorial', path: './fatorial.js'},
  {name: 'Mostra a sequência de Fibonacci', path: './fibonacci.js'}
]

const main = () => {
  const enunciado = 'Qual script você deseja executar?\n'
  const mensagem = scripts.reduce((acc, curr, index) => `${acc}${index + 1} - ${curr.name}\n`, enunciado)
  const selectScript = readline.questionInt(mensagem);
  const script = scripts[selectScript - 1];

  require(script.path);
}

main();
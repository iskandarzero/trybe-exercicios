const readline = require('readline-sync');

const calculaFibonacci = (valor) => {
  const sequencia = [0, 1];

  for (let i = 0; sequencia.length <= valor; i += 1) {
    const valorAtual = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(valorAtual);
  }

  return sequencia;
} 

const main = () => {
  const valor = readline.questionInt('Insira um numero para limitar a sequencia: ');
  console.log(calculaFibonacci(valor));
}

main();
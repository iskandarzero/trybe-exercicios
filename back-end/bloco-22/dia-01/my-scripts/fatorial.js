const readline = require('readline-sync');

const calculaFatorial = (numero) => {
  let fatorial = numero;
  const primeiroMultiplicador = numero - 1;

  for (let i = primeiroMultiplicador; i > 0; i -= 1) {
    fatorial *= i;
  }

  return fatorial;
}

const main = () => {
  const numero = readline.questionInt('Insira um número para saber seu fatorial: ');
  console.log(`O fatorial de ${numero} é ${calculaFatorial(numero)}`);
}

main();
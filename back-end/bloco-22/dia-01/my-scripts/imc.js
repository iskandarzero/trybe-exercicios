const readline = require('readline-sync');

const calculaIMC = (peso, altura) => {
  const metros = altura / 100;
  const metrosAoQuadrado = metros ** 2;

  const imc = (peso / metrosAoQuadrado);
  
  return imc;
}

const checaImc = (imc) => {
  if (imc < 18.5) {
    console.log(`Seu IMC é ${imc} - Abaixo do peso (magreza)`);
  } else if (imc > 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc} - Peso normal`);
  } else if (imc > 24.9 && imc <= 29.9) {
    console.log(`Seu IMC é ${imc} - Acima do peso (sobrepeso)`);
  } else if (imc > 29.9 && imc <= 34.9) {
    console.log(`Seu IMC é ${imc} - Obesidade grau I`);
  } else if (imc > 34.9 && imc <= 39.9) {
    console.log(`Seu IMC é ${imc} - Obesidade grau II`);
  } else {
    console.log(`Seu IMC é ${imc} - Obesidade graus III e IV`);
  };
}

const main = () => {
  const PESO_BASE = readline.questionFloat('Insira seu peso: ');
  const ALTURA_BASE = readline.questionFloat('Insira sua altura: ');

  const imc = calculaIMC(PESO_BASE, ALTURA_BASE).toFixed(2);
  checaImc(imc);
}

main();

module.exports = {main};
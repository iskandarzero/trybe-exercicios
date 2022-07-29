const readline = require('readline-sync');

const calculaVelocidade = (distancia, tempo) => {
  const velocidade = distancia / tempo;

  return velocidade;
}

const main = () => {
  const distancia = readline.questionInt('Insira a distância em metros: ');
  const tempo = readline.questionInt('Insira o tempo em segundos: ');

  const velocidade = calculaVelocidade(distancia, tempo);

  console.log(`Velocidade: ${velocidade.toFixed(2)} m/s`);
}

main();

module.exports = {main};
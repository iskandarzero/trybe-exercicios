const readline = require('readline-sync');

const checkRandom = (guess) => {
  const random = Math.floor(Math.random() * 11);

  if (guess !== random) {
    console.log(`Opa, não foi dessa vez. O número era ${random}`);
  } else {
    console.log('Parabéns, número correto!');
  }
}

const main = () => {
  console.log('Tente adivinhar o número sorteado entre 1 e 10!');
  const guess = readline.questionInt('Insira seu número: ');

  checkRandom(guess);
}

main();

module.exports = {main};
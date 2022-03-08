// 1 - Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (numero) => {
  for (let i = numero - 1; i > 0; i -= 1) {
    numero *= i;
  }
  return numero
}

console.log(fatorial(14));

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = (frase) => {
  const arraySeparacao = frase.split(' ');
  let palavra = '';

  for (let i = 1; i < arraySeparacao.length; i += 1) {
    if (arraySeparacao[0].length < arraySeparacao[i].length) {
      palavra = arraySeparacao[i];
    } 
  }
  return palavra;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 4 - Crie um código JavaScript com a seguinte especificação:

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const names = (string) => `Tryber ${string} aqui!`

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const skills = ['Css', 'HTML', 'Javascript', 'DOM', 'Jest']

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const concatenate = (novaString) => `${novaString} Minhas cinco habilidades são: ${skills.join(', ')}`

console.log(concatenate(names('Isaac')));

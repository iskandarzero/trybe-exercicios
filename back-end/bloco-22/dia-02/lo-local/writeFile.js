// const fs = require('fs').promises;

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  // .then(() => {
    // console.log('Arquivo escrito com sucesso!');
  // })
  // .catch((err) => {
    // console.error(`Erro ao escrever o arquivo: ${err.message}`);
  // });

// const fs = require('fs').promises;

// async function main() {
  // try {
    // await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    // console.log('Arquivo escrito com sucesso!');
  // } catch (err) {
    // console.error(`Erro ao escrever o arquivo: ${err.message}`);
  // }
// }

// main()

const fs = require('fs').promises;

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    console.error(err);
  });
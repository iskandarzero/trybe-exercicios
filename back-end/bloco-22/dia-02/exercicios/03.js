const fs = require('fs').promises;

const findCharacter = async (id) => {
  if (id > 10 || id < 1) throw new Error('id não encontrado');

  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const character = simpsons.find((char) => Number(char.id) === id);

  return character;
}

const main = () => {
  findCharacter(0)
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
}

main();
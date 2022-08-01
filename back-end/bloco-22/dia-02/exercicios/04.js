const fs = require('fs').promises;

const modifyFile = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newFile = simpsons.filter((char) => Number(char.id) !== 10 && Number(char.id) !== 6);
  await fs.writeFile('./simpsons.json', JSON.stringify(newFile));
}

modifyFile();
const fs = require('fs').promises;

const modifyFile = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newFile = simpsons.filter((char) => Number(char.id) <= 4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newFile), { flag: 'wx' });
}

modifyFile();
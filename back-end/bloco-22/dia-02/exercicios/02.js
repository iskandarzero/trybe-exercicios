const fs = require('fs').promises;

const readFile = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  simpsons.forEach((char) => console.log(`${char.id} - ${char.name}`));
}

readFile();
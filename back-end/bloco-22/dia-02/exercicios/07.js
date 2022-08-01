const fs = require('fs').promises;

const modifyFile = async () => {
  const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamilyObj = JSON.parse(simpsonFamily);
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonObj = JSON.parse(simpsons);
  const removeNelson = simpsonFamilyObj.filter((char) => Number(char.id) !== 8);
  removeNelson.push(simpsonObj.find((char) => char.name === 'Maggie Simpson'));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(removeNelson));
}

modifyFile();
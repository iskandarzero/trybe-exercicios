const fs = require('fs').promises;

const modifyFile = async () => {
  const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsonObj = JSON.parse(simpsons);
  const nelson = simpsonObj.find((char) => char.name === 'Nelson Muntz');
  const simpsonFamilyObj = JSON.parse(simpsonFamily);
  simpsonFamilyObj.push(nelson);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyObj));
}

modifyFile();
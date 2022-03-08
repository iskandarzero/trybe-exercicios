const objeto = (obj, chave, valor) => {
  obj[chave] = valor;
  return obj;
}

console.log(objeto({'nome': 'mario'}, 'profissão', 'encanador'));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const aluno = (student) => {
  const arrayHabilidades = Object.keys(student);

  for (const habilidade in arrayHabilidades) {
    console.log(`${arrayHabilidades[habilidade]}, Nível: ${student[arrayHabilidades[habilidade]]}`);
  }
}

console.log('Estudante 1');
aluno(student1);

console.log('Estudante 2');
aluno(student2)

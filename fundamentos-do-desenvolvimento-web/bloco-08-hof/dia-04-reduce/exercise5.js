const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
    acc + curr.split('').reduce((contador, atual) => {
        if (atual.toLocaleLowerCase() === 'a') return contador + 1;
        return contador;
      }, 0), 0)
}

console.log(containsA());

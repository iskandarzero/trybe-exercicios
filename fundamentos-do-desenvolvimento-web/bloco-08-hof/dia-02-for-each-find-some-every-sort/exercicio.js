const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//-----------------------------------------------------------------

console.log('// EXERCICIO 1');// EXERCICIO 1

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947);

console.log(authorBornIn1947());

//-----------------------------------------------------------------

console.log('EXERCICIO 2');// EXERCICIO 2

function smallerName() {
  let nameBook;
  let counter = books[0].name.length;
  const bookInfo = books.forEach((book, index) => {
    if (counter > book.name.length) {
      counter = book.name.length;
      nameBook = book.name;
    }
  })
return nameBook;
}

console.log(smallerName());

//-----------------------------------------------------------------

console.log('EXERCICIO 3');// EXERCICIO 3

const getNamedBook = () => books.find((book) => book.name.length === 26);

console.log(getNamedBook());

//-----------------------------------------------------------------

console.log('EXERCICIO 4');// EXERCICIO 4

const booksOrderedByReleaseYearDesc = () => books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(booksOrderedByReleaseYearDesc());

//-----------------------------------------------------------------

console.log('EXERCICIO 5');// EXERCICIO 5

const everyoneWasBornOnSecXX = () => books.every((book) => book.author.birthYear > 1901 && book.author.birthYear < 2000);

console.log(everyoneWasBornOnSecXX());

//-----------------------------------------------------------------

console.log('EXERCICIO 6');// EXERCICIO 6

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear > 1979 && book.releaseYear < 1990);

console.log(someBookWasReleaseOnThe80s());

//-----------------------------------------------------------------

console.log('EXERCICIO 7');// EXERCICIO 7
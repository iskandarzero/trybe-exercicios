// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Uva', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Manga', 'Maçã'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];

  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));

//---------------------------------------------------------------

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60,45 ,765, 32, 34, 5, 6, 2, 7, 34, 5467, 34, 7)); 

//---------------------------------------------------------------

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos
}

const { name, age, nationality, profession, squad, squadInitials } = userInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

//-------------------------------------------------------------------

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, funcSaudacao] = saudacoes;

funcSaudacao(saudacao);

//-------------------------------------------------------------------

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = ['arroz', 'gato', 'água'];

console.log(comida, animal, bebida); // arroz gato água

//------------------------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

//------------------------------------------------------------------

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//-----------------------------------------------------------------

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

//-----------------------------------------------------------------

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));
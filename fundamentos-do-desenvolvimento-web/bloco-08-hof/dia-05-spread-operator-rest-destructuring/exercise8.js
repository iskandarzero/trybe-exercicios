const greet = (user, greeting = 'Hi') => `${greeting} ${user}`

console.log(greet('John'))
console.log(greet('John', 'Good morning'))
console.log(greet('Isabela', 'Oi'))
const wakeup = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (routine) => routine();

console.log(doingThings(wakeup));
console.log(doingThings(breakfast));
console.log(doingThings(sleep));

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
const swap = ([, b, c]) => [b, c];

const months = [...swap(winter), ...spring, ...summer, ...autumn, winter[0]]

console.log(months);
const a = 'doge';
const b = 'home';

const findMatch = new RegExp(`[ ${b} ]`, 'g');

console.log(a.match(findMatch));

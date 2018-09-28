const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const findBiggest = arr => Math.max(...arr.filter((item, i) => i % 2 !== 0));

console.log(findBiggest(array));

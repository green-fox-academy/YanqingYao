const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function findBiggest(arr) {
  const newArr = [];
  arr.forEach((i) => {
    if (i % 2 !== 0) {
      newArr.push(arr[i]);
    }
  });
  return Math.max(...newArr);
}

console.log(findBiggest(array));

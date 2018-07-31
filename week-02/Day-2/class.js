// function double(number=3) {
//   return number * 2;
// }
// console.log(double());
// console.log(double(4));

//Arrow function
const doubleArrow =(number) => {
  return number *2;
}
const doubleArrow2 = number => number *2;


//display all Array
const arr = [1,2,3];
for (let i=0;i<arr.length;i++) {
  console.log(arr[i]);
}
//两种写法，下面更简单
const logger = (toLog)=> {
  console.log(toLog);
}
const logger = toLog => console.log(toLog);

logger(arr[2]);

//内置 function FOR EACH， 不 return anything，只会是 undefined
arr.forEach(logger);

arr.forEach(element => console.log(element)); //function without name

//MAP return 新的 array，而不是修改
const duplicate = (toDuplicare) => {
  return toDuplicare*2;
}
const duplicatedArr = arr.map(duplicate)
console.log(duplicatedArr);

//Filter
//for 的做法
const filterOdd = (arr) => {
  let odds = [];
  for (let i = 0;i<arr.length;i++) {
    if (arr[i] % 2 == 1) {
      odds.push(arr[i]);
    }
  }
  return odds;
}
console.log(filterOdd(arr));

//filter 的做法
const isOdd = (number) => {
  return number % 2 == 1;
  // if (number % 2 == 1) {
  //   return true;
  // } else {
  //   return false;
  // }
}
console.log(isOdd);

//简单写法
const oddELemets = arr.filter(
  number => number % 2 == 1
)
console.log(oddELemets);


//Join 这个不是 function，只是单纯 string
["a","b","c"].join(" ")



//这个叫 source.js
const a = 5;
const c = () => {};

module.exports = {
  first: a;
  func: c;
}


//调用的文件
const mySource = require('./source');
console.log(mySource.first); // output 5

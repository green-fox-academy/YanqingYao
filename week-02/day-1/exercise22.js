'use strict';

//22 - conditional-variable-mutation
const a = 24;  // if a is even increment out by one
let out = 0;
if (a%2==0) {
  ++out;
}
console.log(out);



const b = 13;
let out2 = '';
if (b>=10 && b<=20) {
  out2 = 'Sweet!';
} else if (b<10) {
  out2 = 'Less!';
} else if (b>20) {
  out2 = 'More!';
}
// if b is between 10 and 20 set out2 to 'Sweet!'
// if less than 10 set out2 to 'Less!',
// if more than 20 set out2 to 'More!'
console.log(out2);



let c = 123;
const credits = 100;
const isBonus = false;
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if (credits>=50 && isBonus==false) {
  c-=2;
} else if (credits<50 || isBonus==false) {
  c-=1;
}
console.log(c);




const d = 8;
const time = 120;
let out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to 'check'
// if time is more than 200
// set out3 to 'Time out'
// otherwise set out3 to 'Run Forest Run!'
if (d%4==0 && time<=200) {
  out3 = 'check';
} else if (time>200) {
  out3 = "Time out";
}
console.log(out3);




//23 - i-wont-cheat-on-the-exams
    // Create a program that writes this line 100 times:
    // "I won't cheat on the exam!"
for (var i = 0;i<100;i++) {
  console.log("I won't cheat on the exam!");
}


//24 - print-even
for (i = 0;i<=500;i+=2) {
  console.log(i);
}


//25 - multiplication-table
const number = 15;
for (i=1; i<=10;i+=1) {
  console.log(i+"*15=" + i*15);
}


//27 - fizz-buzz
  // Write a program that prints the numbers from 1 to 100.
  // But for multiples of three print 'Fizz' instead of the number
  // and for the multiples of five print 'Buzz'.
  // For numbers which are multiples of both three and five print 'FizzBuzz'.
for(i=1;i<=100;i++){
  if (i%3==0 && i%5==0) {
    console.log('FizzBuzz');
  } else if (i%3==0) {
    console.log('Fizz');
  }else if (i%5==0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


//28 - draw-triangle
const lineCount = 4;
for (i=1;i<=lineCount;i++) {
  var x = "";
  for(i=1;i<=lineCount;i++) {
    x+="*";
    console.log(x);
  }
}



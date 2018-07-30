

 'use strict';

//11 - variable-mutation
let a = 3; // make it bigger by 10
a = a + 10;
console.log(a);

let b = 100; // make it smaller by 7
b = b - 7;
console.log(b);

let c = 44;  // double c's value
c = c * 2;
console.log(c);

let d = 125; // divide d's value by 5
 d = d/5;
console.log(d);

let e = 8; // what's the cube of e's value?
e = e*e*e;
console.log(e);

const f1 = 123; // tell if f1 is bigger than f2 (as a boolean)
const f2 = 345;
console.log(f1>f2);


const g1 = 350; // tell if the double of g2 is bigger than g1 (as a boolean)
const g2 = 200;
console.log(g2*2>g1);

const h = 1357988018575474; // tell if h has 11 as a divisor (as a boolean)
console.log(h%11==0);

const i1 = 10; // tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
const i2 = 3;
console.log(i1>(i2*i2) && i1<i2*i2*i2);

const j = 1521; // tell if j is dividable by 3 or 5 (as a boolean)
console.log(j/3==0 || j/5==0);

let k = 'Apple'; // fill the k variable with its content 4 times
console.log(k+k+k+k);




//12 - cuboid 💪
var width = 10;
var long = 15;
var height =20;
var surfaceArea = (10*15+10*20+15*20)*2;
var volume = 10*15*20;
console.log("Surface Area: " + surfaceArea);
console.log("Surface Area: " + volume);




//13 - seconds-in-a-day
const currentHours = 14;     // Write a program that prints the remaining seconds (as an integer) from a
const currentMinutes = 34;   // day if the current time is represented by these variables
const currentSeconds = 42;
let hourRemained = (24-currentHours)*60*60;
let minuteRemained = (60-currentMinutes)*60;
let secondRemained = 60-currentSeconds;
console.log("remaining seconds are: " + (hourRemained+minuteRemained+secondRemained));





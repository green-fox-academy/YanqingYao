//32 - draw-diagonal
'use strict';

const lineCount = 12;


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (var i=1;i<=lineCount;i++) {
  if(i==1 || i==lineCount){
    console.log("%%%%%");
  } else if (i==lineCount/3) {
    console.log("%%  %");
  } else if (i==lineCount/2) {
    console.log("% % %");
  } else if (i==lineCount*2/3) {
    console.log("%  %%");
  } else {
    console.log("%   %");
  }
}

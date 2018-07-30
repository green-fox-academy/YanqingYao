//29 - draw-pyramid 💪
const lineCount = 4;
let a = 0;
for (i=1;i<=lineCount;i++) {
  var x = "";
  for(a=(lineCount-i);a>=1;a--) {
    x+=" ";
  }
  for(c=1;c<i;c++) {
    x+="*";
  }
  for(b=i;b>0;b--) {
    x+="*";
  }
  console.log(x);
}



//30 - draw-diamond 💪
var lineCount1 =7;
for (i=1;i<=lineCount1;i++) {
  if(i<lineCount1/2) {
      var x = "";
      for(a=(lineCount1-i);a>=lineCount1/2;a--) {
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
  else {
    x = "";
    for(e=i-1;e>lineCount1/2;e--){
      x+=" ";
    }
    for(f=i;f<=lineCount1;f++) {
      x+="*";
    }
    for(g=i;g<lineCount1;g++) {
      x+="*";
    }
    console.log(x)
  }
}

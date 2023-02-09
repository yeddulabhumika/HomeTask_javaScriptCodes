function partition(numArr) {
     let x = [];
     let y=[];
     let k = 0;
     let z = 0;
     for (let i = 0; i < numArr.length; i++) {
          if (numArr[i] % 2 != 0) {
               x[k] = numArr[i];
               k += 1;
          }
          else{
               y[z]=(numArr[i]);
               z+=1;
          }
     }
     var q=x.concat(y);
     document.write(q);

     document.writeln("\n The index where even number starts is:");
     return x.length;
}
document.write(partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 2]));    

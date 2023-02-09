function partition(numArr) {
    let x=[];
    let k=0;
    let z=0;
    for (let i = 0; i < numArr.length; i++) {  
       if((Number)(numArr[i])%2!=0){
            x[k]=(Number(numArr[i]));
            k+=1;
       }
    }z= k;
    for (let i = 0; i < numArr.length; i++) {  
        if((Number)(numArr[i])%2==0){
             x[k]=(Number(numArr[i]));
             k+=1;
        }
     }
    document.write(x);
    document.writeln("\n The index where even number starts is:");
    return z;
}
document.write(partition([1, 2, 3, 4, 5, 6,7,8,9,4,2]));    

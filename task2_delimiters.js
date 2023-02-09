function delimitera(numArr){
    let x='';
    for (let i=0;i<numArr.length;i++){
        x+=numArr[i]+(',');
    }
    return x.slice(0,x.length-1);
}
document.write(delimitera(["h","o","l","a","r","u"]));
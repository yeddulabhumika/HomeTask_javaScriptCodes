function oppositeNum(){
    let num = document.getElementById("num").value;
    amount = (num) - 2*num;
    document.getElementById("hist").innerHTML = "Opposite of  " + num + " is:    " + amount;
    
}

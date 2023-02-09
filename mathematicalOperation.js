function calculate(){
    const operator=document.getElementById("oper").value;
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=0;
    switch(operator){
        case '+':
            result=Number(num1) + Number(num2);;
            break;
        case '-':
            result= num1-num2;
            break;
        case '*':
            result= num1*num2;
            break;
        case '/':
            result= num1/num2;
            break; 
    }
    document.getElementById("hist").innerHTML = "Result after performing operation on two numbers is :" + result;

}

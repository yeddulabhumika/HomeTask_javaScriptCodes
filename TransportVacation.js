function TransportVacation() {
    let d = document.getElementById("days").value;
    const rent_per_day = 40;
    var amount = 0;
    if (d < 3) {
        amount = (rent_per_day * d);
        document.getElementById("hist").innerHTML = "you are not eligible for any discount. The total amount for " + d + " days is : " + amount;
    }
    else if (d >= 7) {
        amount = (rent_per_day * d) - 50;

        document.getElementById("hist").innerHTML = "You are eligible for discount of 50$. The total amount for " + d + " days is : " + amount;
    }
    else if (d >= 3) {
        amount = (rent_per_day * d) - 20;

        document.getElementById("hist").innerHTML = "You are eligible for discount of 20$. The total amount for " + d + " days is : " + amount;
    }
}

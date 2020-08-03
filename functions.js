
var timeUnit = "minutos" ;
var money = "total money colected for the subway tickets"
//function 11111
function totalmins(hours,min){
    var hours1 = 60;
    return hours1*hours + min;
}
//function 222222
function colectedamount(price , numberOfpeople){
    return price * numberOfpeople;
}
//function 33333
function subwayticket(students, adults, amountstu, amountadu){
    return students * amountstu + adults* amountadu 
}

alert( totalmins(5,25)+timeUnit );
alert( colectedamount(200, 10))
alert( subwayticket(1,5,20,4)+ money)
let number1;
let number2;

number1 = window.prompt("indicate the first number for comparison:");
number2 = window.prompt("indicate the second number for comparison:");

document.getElementById('first').innerHTML = number1;
document.getElementById('second').innerHTML = number2;

if(number1 < number2){

    document.getElementById('results').innerHTML = (number2);

}if(number2 < number1){

    document.getElementById('results').innerHTML = (number1);

}if(number1 == number2){

    document.getElementById('results').innerHTML = ("there is no GREATER number they are EQUAL!");

}
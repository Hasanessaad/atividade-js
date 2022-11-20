let number;

number = window.prompt("indicate your number:");

console.log(number);

if(number>=0){

    document.getElementById('greater').innerHTML = ("É POSITIVO!");

}else if(number<0){

    document.getElementById('less').innerHTML = ("É NEGATIVO!");

}
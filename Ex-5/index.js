let number;

number = window.prompt("indicate your number:");

console.log(number);

if(number>100){

    document.getElementById('greater').innerHTML = ("É MAIOR QUE 100!");

}else if(number<=100){

    document.getElementById('less').innerHTML = ("NÃO É MAIOR QUE 100!");

}
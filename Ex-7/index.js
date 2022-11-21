let number;
let cost;

number = window.prompt("indicate the quantity of apples you desire:");

document.getElementById('quantity').innerHTML = (number);

if(number<12){

    cost = number * 1.30;
    document.getElementById('quantity_less').innerHTML = (cost);

}else if (number>=12){

    cost = number * 1;
    document.getElementById('quantity_more').innerHTML = (cost);

}
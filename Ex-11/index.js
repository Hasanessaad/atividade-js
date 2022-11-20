let type;
let calc;
let amount;
let x;
let results;

type = window.prompt("indicate the TYPE of fuel you desire:");
amount = window.prompt("indicate the AMOUNT of fuel you desire:");


document.getElementById('amount').innerHTML = amount;

if(type === "A" ){

    if(amount <= 20){

        calc = amount * 2.90; 
        x = parseFloat(calc);
        results = calc - x * 3/100;
        console.log("you got a discount of 3% in A-alcool!");
        document.getElementById('type').innerHTML = ("álcool");
        document.getElementById('results').innerHTML = (results);

    }else if(amount > 20){

        calc = amount * 2.90; 
        x = parseFloat(calc);
        results = calc - x * 5/100;
        console.log("you got a discount of 5% in A-alcool!");
        document.getElementById('type').innerHTML = ("álcool");
        document.getElementById('results').innerHTML = (results);

    }

}if(type === "G"){

    if(amount <= 20){

        calc = amount * 3.30; 
        x = parseFloat(calc);
        results = calc - x * 4/100;
        console.log("you got a discount of 4% in G-gasolina!");
        document.getElementById('type').innerHTML = ("gasolina");
        document.getElementById('results').innerHTML = (results);

    }else if(amount > 20){

        calc = amount * 3.30; 
        x = parseFloat(calc);
        results = calc - x * 6/100;
        console.log("you got a discount of 6% in G-gasolina!");
        document.getElementById('type').innerHTML = ("gasolina");
        document.getElementById('results').innerHTML = (results);

    }

}